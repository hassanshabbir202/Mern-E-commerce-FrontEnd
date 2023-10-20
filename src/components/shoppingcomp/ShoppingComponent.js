import React, { useEffect, useState } from "react";
import "./ShoppingComponent.css";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const ShoppingComponent = () => {
  const [blogproductData, setBlogProductData] = useState([]);
  const [searchInputValue , setSearchInputValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);



  const blogAllData = async () => {
    const response = await fetch("/addblogproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const blogproductD = await response.json();
    setBlogProductData(blogproductD);

    if (blogproductD) {
      setLoading(false);
    }
  };


  // Filter Products

  const filterdData = blogproductData.filter((items) => {
   return items.blogTitle.toLowerCase().includes(searchInputValue.toLocaleLowerCase());
  })

  useEffect(() => {
    blogAllData();
  }, []);


  return (
    <div className="blog-products-maincontainer">
      <div className="blog-container">
        <div className="blog-filter-container">
          <h2>SEARCH FILTERS</h2>
         <div className="main-search-box">
         <div className="search-container">
            <input type="text" placeholder="Search Products" value={searchInputValue} id="search" autoComplete="off" onChange={(e) => {setSearchInputValue(e.target.value)}}/>
          </div>
         </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="blog-products-container">
            {filterdData.map((product) => {
              return (
                <div>
                  <div className="products-blog-boxes">
                    <img src={product.blogSelectedImage} alt="" />
                    <div className="blog-des">
                      <p>
                        <b>Description : </b> {product.blogDes}
                      </p>
                    </div>
                    <div className="blog-des">
                      <p>
                        <b>Title : </b> {product.blogTitle}
                      </p>
                    </div>
                    <div className="blog-p">
                      <p>
                        <b>Price : </b>${product.blogPrice}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingComponent;
