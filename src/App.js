import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Admin from "./admin/Admin";
import SingleProduct from "./pages/single/SingleProduct";
import AllP from "./pages/allP/AllP";
import AllB from "./pages/allB/AllB";
import MainCheckOut from "./pages/maincheckout/MainCheckOut";
import Paynment from "./components/checkout/paynment/Paynment";
import Review from "./components/checkout/review/Review";
import PlaceOrder from "./components/checkout/orderplace/PlaceOrder";
import Order from "./pages/orders/Order";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<MainCheckOut/>} />
        <Route path="/checkout/paynmentdetails" element={<Paynment/>} />
        <Route path="/checkout/reviworder" element={<Review/>} />
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/allproduct/:id" element={<AllP />} />
        <Route path="/blogproduct/:id" element={<AllB />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
