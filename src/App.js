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
import BypHeader from "./components/byp/BypHeader";
import BypFooter from "./components/byp/BypFooter";
// import pages >>>
import Home4 from "./pages/Home4";
import About from "./pages/About";
import Contect from "./pages/Contect";
import BlogGrid from "./pages/BlogGrid";
import BlogArticle from "./pages/blog/BlogArticle";
import Error404 from './pages/Error404'
import ScrollTop from "./constent/ScrollTop";
import Seo from "./components/byp/Seo";

import CasosDeExito from "./pages/CasosDeExito";
import CaseStudyTemplate from "./pages/cases/CaseStudyTemplate";
import IndustriesIndex from "./pages/IndustriesIndex";
import BrandsIndex from "./pages/BrandsIndex";
import Rondo from "./pages/brands/Rondo";
import Diosna from "./pages/brands/Diosna";
import Winterhalter from "./pages/brands/Winterhalter";
import TrueBrand from "./pages/brands/True";
import Pietroberto from "./pages/brands/Pietroberto";
import EquiposIndex from './pages/equipos/EquiposIndex';
import Licuadoras from './pages/equipos/Licuadoras';
import Refrigeracion from './pages/equipos/Refrigeracion';
import Amasadoras from './pages/equipos/Amasadoras';
import Laminadoras from './pages/equipos/Laminadoras';
import Batidoras from './pages/equipos/Batidoras';
import Divisoras from './pages/equipos/Divisoras';
import MoldesYBandejas from './pages/equipos/MoldesYBandejas';
import Lavavajillas from './pages/equipos/Lavavajillas';
import Cortadoras from './pages/equipos/Cortadoras';
import Chocolate from './pages/equipos/Chocolate';
import Vitamix from './pages/brands/Vitamix';
import Cainco from './pages/brands/Cainco';
import Pomati from './pages/brands/Pomati';
import AmericanPan from './pages/brands/AmericanPan';
import JbtMarel from './pages/brands/JbtMarel';
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

            <Route path='/equipos' element={<EquiposIndex />} />
            <Route path='/equipos/licuadoras' element={<Licuadoras />} />
            <Route path='/equipos/refrigeracion' element={<Refrigeracion />} />
            <Route path='/equipos/amasadoras' element={<Amasadoras />} />
            <Route path='/equipos/laminadoras' element={<Laminadoras />} />
            <Route path='/equipos/batidoras' element={<Batidoras />} />
            <Route path='/equipos/divisoras' element={<Divisoras />} />
            <Route path='/equipos/moldes-y-bandejas' element={<MoldesYBandejas />} />
            <Route path='/equipos/lavavajillas' element={<Lavavajillas />} />
            <Route path='/equipos/cortadoras' element={<Cortadoras />} />
            <Route path='/equipos/chocolate' element={<Chocolate />} />
            <Route path='/marcas' element={<BrandsIndex />} />
            <Route path='/marcas/rondo' element={<Rondo />} />
            <Route path='/marcas/diosna' element={<Diosna />} />
            <Route path='/marcas/winterhalter' element={<Winterhalter />} />
            <Route path='/marcas/true' element={<TrueBrand />} />
            <Route path='/marcas/pietroberto' element={<Pietroberto />} />
            <Route path='/marcas/vitamix' element={<Vitamix />} />
            <Route path='/marcas/cainco' element={<Cainco />} />
            <Route path='/marcas/pomati' element={<Pomati />} />
            <Route path='/marcas/americanpan' element={<AmericanPan />} />
            <Route path='/marcas/jbtmarel' element={<JbtMarel />} />

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
      <Seo />
      <BypHeader />
      <Outlet />
      <BypFooter />

    </>
  )
}

export default App;
