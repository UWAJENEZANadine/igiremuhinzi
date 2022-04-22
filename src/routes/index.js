import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";
import ProductView from "../views/product";
import AboutUs from "../views/aboutUs";
import Signin from "../views/signin";
import SignUp from "../views/SignUp";

import NewProductPost from "../views/dashboard/newProduct";
import DashLayout from "../components/DashboadLayoutForSeller";
import Dashbord from "../components/DashboardForAdmin";
import AllProduct from "../views/dashboard/allProducts";
import AllOrder from "../views/dashboard/orders";
import Submit from "../components/order";
import Overview from "../views/dashboard/Overview";
import  SingleProduct from "../components/singleproduct"

const isUserLogedIn = localStorage.getItem("userLogedIn");

const Index = () => {
  const currentUrl = useLocation().pathname;
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/product" element={<ProductView />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/order" element={<Submit />} />
        <Route path="/dash/admin" element={<Dashbord />}/>
        <Route path="/singleproduct" element={< SingleProduct />}/>
   
      </Routes>

      {isUserLogedIn && currentUrl.includes("/dash") ? (
        <DashLayout>
          <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/dash/Overview" element={<Overview />}></Route>
            <Route path="/dash/newProduct" element={<NewProductPost />}></Route>
            <Route path="/dash/allProducts" element={<AllProduct />}></Route>
            <Route path="/dash/allorder" element={<AllOrder />}></Route>
            
          </Routes>
        </DashLayout>
      ) : (
        <></>
      )}

      


    </>
  );
};
export default Index;
