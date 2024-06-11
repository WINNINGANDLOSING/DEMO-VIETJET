import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import bodyBackgroundImage from "./images/bodyBackgroundImage.png";
import PhuongThucVanChuyenModal from "./components/PhuongThucVanChuyenModal";
import PhuongThucVanChuyenDetail from "./components/PhuongThucVanChuyenDetail";
import ProductList from "./components/SkyshopCategories/ProductList";
import FooterProductList from "./components/SkyshopCategories/FooterProductList";
import ProductDetail from "./components/SkyshopCategories/ProductDetail";
import CartStage1 from "./components/SkyshopCategories/CartStage1";
import CartStage2 from "./components/SkyshopCategories/CartStage2";
import ScrollToTop from "./components/Helpers/ScrollToTop";
import FinalCartStage from "./components/SkyshopCategories/FinalCartStage";
import SearchResultPage from "./components/SkyshopCategories/SearchResultPage";
const App = () => {
  return (
    <div
      className="flex flex-col min-h-screen  overflow-x-hidden relative"
      style={{ background: `url(${bodyBackgroundImage})` }}
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path=""
          element={
            <div>
              <Body />
            </div>
          }
        />

        <Route
          path="/Home"
          element={
            <div>
              <Body /> <Footer />
            </div>
          }
        />
        <Route
          path="/PhuongThucVanChuyen"
          element={<PhuongThucVanChuyenModal />}
        />

        <Route
          path="/PhuongThucVanChuyen/PhuongThucVanChuyenDetail"
          element={<PhuongThucVanChuyenDetail />}
        />

        <Route path="/SearchResultPage" element={<SearchResultPage />} />
        <Route path="/ProductList/ProductDetail" element={<ProductDetail />} />

        <Route path="/ProductList" element={<ProductList />} />

        <Route
          path="/ProductDetail"
          element={
            <div>
              <ProductDetail /> <FooterProductList />
            </div>
          }
        />
        <Route path="/ProductDetail/CartStage1" element={<CartStage1 />} />
        <Route path="/CartStage1" element={<CartStage1 />} />
        <Route
          path="/ProductDetail/CartStage1/CartStage2"
          element={<CartStage2 />}
        />

        <Route
          path="/ProductDetail/CartStage1/CartStage2/FinalCartStage"
          element={<FinalCartStage />}
        />
      </Routes>
    </div>
  );
};

export default App;
