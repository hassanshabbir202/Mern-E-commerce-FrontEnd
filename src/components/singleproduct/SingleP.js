import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import "./SingleP.css";
import { useNavigate, useParams } from "react-router-dom";
import { add_TO_CART, cartTotal, cart_total_price, qtt } from "../../features/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleP = () => {
  const [value, setValue] = React.useState(4);
  const [singleData, settSingalData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  const getProductD = async () => {
    const fetchD = await fetch(`/addproduct/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const sData = await fetchD.json();
    settSingalData(sData);
  };

  useEffect(() => {
    getProductD();
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addtocart = (image, title, price) => {
    let cData = { img: image, t: title, p: price };
    dispatch(add_TO_CART(cData));
    dispatch(cart_total_price(cData.p));
    dispatch(qtt(quantity))
    dispatch(cartTotal(cData.p*quantity))
    toast.success("Product Added to Cart!");
    navigate("/cart");
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity == 1) {
      setQuantity(1);
      toast.error("Atleast Buy 1 Product!");
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="main-signle-product-container">
      <div className="signle-product-container">
        <div className="single-image-product">
          <img src={singleData.selectedImage} alt="" />
        </div>
        <div className="signle-text-info-product">
          <p className="firstTitle">{singleData.title}</p>
          <p className="secondTitle">{singleData.title}</p>
          <Rating name="read-only" id="rating-star" value={value} readOnly />
          <p className="priceparagraph">
            ${singleData.price}.00/<sup className="super-tag">per product</sup>
          </p>
          <p className="desc-paragraph">
            {singleData.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Labore saepe similique consequatur aspernatur
            rerum sed dolorem sunt architecto pariatur placeat repellendus neque
            ipsum provident omnis odit itaque, sit, totam iusto ullam animi
            dignissimos eum. Porro dolore quod amet provident quibusdam.
          </p>
          <div className="quantity-div">
            <p>Quantity : </p>
            <button id="minus_btn" onClick={decrement}>
              -
            </button>
            <button id="count_btn">{quantity}</button>
            <button id="plus_btn" onClick={increment}>
              +
            </button>
          </div>
          <div className="add-tocart-and-buy-now-btns">
            <button id="buy-now_btn">BUY NOW</button>
            <button
              id="add-tocartBtns"
              onClick={() =>
                addtocart(
                  singleData.selectedImage,
                  singleData.title,
                  singleData.price
                )
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
