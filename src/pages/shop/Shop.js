import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ShoppingHeader from "../../components/shoppingheader/ShoppingHeader";
import ShoppingComponent from "../../components/shoppingcomp/ShoppingComponent";
const Shop = () => {
  return (
    <div>
      <Navbar />
      <ShoppingHeader/>
      <ShoppingComponent/>
    </div>
  );
};

export default Shop;
