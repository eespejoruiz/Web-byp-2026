import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import css files
import '../src/assets/vendor/swiper/swiper-bundle.min.css'
import '../src/assets/vendor/switcher/switcher.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "./assets/css/selectoptin.css";
import '../src/assets/css/style.css'
import "./assets/css/byp-overrides.css";
// import components >>
import Header from './components/Header';
import Footer from "./components/Footer";
// import pages >>>
import Home4 from "./pages/Home4";
import About from "./pages/About";
import Contect from "./pages/Contect";
import BlogGrid from "./pages/BlogGrid";
import BlogArticle from "./pages/blog/BlogArticle";
import Error404 from './pages/Error404'
import ScrollTop from "./constent/ScrollTop";

import CasosDeExito from "./pages/CasosDeExito";
import CaseStudyTemplate from "./pages/cases/CaseStudyTemplate";
import IndustriesIndex from "./pages/IndustriesIndex";
import Restaurantes from "./pages/industries/Restaurantes";
import Estadios from "./pages/industries/Estadios";
import Panaderia from "./pages/industries/Panaderia";
import CocinasIndustriales from "./pages/industries/CocinasIndustriales";
import HotelesCatering from "./pages/industries/HotelesCatering";
import Supermercados from "./pages/industries/Supermercados";
import ComidaRapida from "./pages/industries/ComidaRapida";
import Laboratorios from "./pages/industries/Laboratorios";
import Carnicerias from "./pages/industries/Carnicerias";
import BaresCafeterias from "./pages/industries/BaresCafeterias";
import Otros from "./pages/industries/Otros";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home4 />} />
            <Route path='/nosotros' element={<About />} />
            <Route path='/blog' element={<BlogGrid />} />
            <Route path='/blog/:slug' element={<BlogArticle />} />
            <Route path='/contacto' element={<Contect />} />
            <Route path='/casos-de-exito' element={<CasosDeExito />} />
            <Route path='/casos-de-exito/:slug' element={<CaseStudyTemplate />} />

            <Route path='/industrias' element={<IndustriesIndex />} />
            <Route path='/industrias/restaurantes' element={<Restaurantes />} />
            <Route path='/industrias/panaderia' element={<Panaderia />} />
            <Route path='/industrias/cocinas-industriales' element={<CocinasIndustriales />} />
            <Route path='/industrias/supermercados' element={<Supermercados />} />
            <Route path='/industrias/bares-cafeterias' element={<BaresCafeterias />} />
            <Route path='/industrias/hoteles-catering' element={<HotelesCatering />} />
            <Route path='/industrias/comida-rapida' element={<ComidaRapida />} />
            <Route path='/industrias/laboratorios' element={<Laboratorios />} />
            <Route path='/industrias/carnicerias' element={<Carnicerias />} />
            <Route path='/industrias/estadios' element={<Estadios />} />
            <Route path='/industrias/otros' element={<Otros />} />

            <Route path='/industria/restaurantes' element={<Restaurantes />} />
            <Route path='/industria/estadios' element={<Estadios />} />
            <Route path='/industria/panaderia' element={<Panaderia />} />
            <Route path='/industria/cocinas-industriales' element={<CocinasIndustriales />} />
            <Route path='/industria/hoteles-catering' element={<HotelesCatering />} />
            <Route path='/industria/supermercados' element={<Supermercados />} />
            <Route path='/industria/comida-rapida' element={<ComidaRapida />} />
            <Route path='/industria/laboratorios' element={<Laboratorios />} />
            <Route path='/industria/carnicerias' element={<Carnicerias />} />
            <Route path='/industria/bares-cafeterias' element={<BaresCafeterias />} />
            <Route path='/industria/otros' element={<Otros />} />

            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
        <ScrollTop />        
      </BrowserRouter>
    </>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App;
