import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CartHeader from "../../components/cartheader/CartHeader";
import CartSection from "../../components/cartsection/CartSection";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeader/>
      <CartSection/>
    </div>
  );
};

export default Cart;
