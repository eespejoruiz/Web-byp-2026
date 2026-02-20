import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('swiper/react', () => {
  const React = require('react');
  return {
    Swiper: React.forwardRef(({ children }, ref) => (
      <div data-testid="swiper" ref={ref}>
        {children}
      </div>
    )),
    SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
  };
});

jest.mock('swiper', () => ({
  Autoplay: {},
  Navigation: {},
  Pagination: {},
  Parallax: {},
}));

jest.mock('lightgallery/react', () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="lightgallery">{children}</div>,
}));

jest.mock('lightgallery/plugins/thumbnail', () => ({}));
jest.mock('lightgallery/plugins/zoom', () => ({}));

import App from './App';

test('renders primary navigation', () => {
  render(<App />);
  const navItems = screen.getAllByText(/Soluciones por Industria/i);
  expect(navItems.length).toBeGreaterThan(0);
});
