import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import "./AllBlogProducts.css";
import { useParams } from "react-router-dom";

const AllBlogProducts = () => {
  const [value, setValue] = React.useState(4);
  const [blogsingleData, settBlogSingalData] = useState({});

  const params = useParams();

  const getBlogProductD = async () => {
    const blogfetchD = await fetch(`/addblogproduct/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const blogsData = await blogfetchD.json();
    settBlogSingalData(blogsData);
  };

  useEffect(() => {
    getBlogProductD();
  });

  return (
    <div className="blog-main-signle-product-container">
      <div className="blog-signle-product-container">
        <div className="blog-single-image-product">
          <img src={blogsingleData.blogSelectedImage} alt="" />
        </div>
        <div className="blog-signle-text-info-product">
          <p className="blog-firstTitle">{blogsingleData.blogTitle}</p>
          <p className="blog-secondTitle">{blogsingleData.blogTitle}</p>
          <Rating name="read-only" id="rating-star" value={value} readOnly />
          <p className="blog-priceparagraph">
            ${blogsingleData.blogPrice}.00/
            <sup className="super-tag">per product</sup>
          </p>
          <p className="blog-desc-paragraph">
            {blogsingleData.blogDes} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Labore saepe similique consequatur aspernatur
            rerum sed dolorem sunt architecto pariatur placeat repellendus neque
            ipsum provident omnis odit itaque, sit, totam iusto ullam animi
            dignissimos eum. Porro dolore quod amet provident quibusdam.
          </p>
          <div className="blog-quantity-div">
            <p>Quantity : </p>
            <button id="blog-minus_btn">-</button>
            <button id="blog-count_btn">1</button>
            <button id="blog-plus_btn">+</button>
          </div>
          <div className="blog-add-tocart-and-buy-now-btns">
            <button id="blog-buy-now_btn">BUY NOW</button>
            <button id="blog-add-tocartBtns">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogProducts;
