import { Route, Routes } from "react-router";
import Home from "../pages/home/home";
import ProductPage from "../pages/product/productPage";
import ProfilePage from "../pages/profile/profilePage";
import Layout from "../components/layout/layout";
import SalesPage from "../pages/home/sales/salesPage";
import AddProductPage from "../pages/home/addproduct/addproductPage";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="profile" element={<ProfilePage />}/>
          <Route path="product" element={<ProductPage />}/>
          <Route path="sales" element={<SalesPage/>}/>
          <Route path="addProduct" element={<AddProductPage/>}/>

        </Route>
      </Routes>
    </>
  );
}

