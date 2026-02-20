import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;
    try {
      window.scrollTo(0, 0);
    } catch (_) {
      return;
    }
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => {
          if (process.env.NODE_ENV === "test") return;
          try {
            window.scrollTo(0, 0);
          } catch (_) {
            return;
          }
        }}
        style={{ display: 'block' }}
        className="scroltop icon-up"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default ScrollTop;
