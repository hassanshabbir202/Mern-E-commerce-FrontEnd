import React, { useEffect, useState } from "react";
import "./BlogProducts.css";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const BlogProducts = () => {
  let priceFiltersData = [50, 100, 300, 500, 1000, 2000, 4000];
  let categoryFilters = ["Good Handfree", "Mackbook Pro", "Smart Watch"];
  let companyF = ["Laptop" , "Toshiba Laptop" , "Mackbook Pro" , "Lenovo Laptop"];
  const [companyFilters,setCompanyFilters] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [blogproductData, setBLogProductData] = useState([]);

  const filteredCompanyData = blogproductData.filter((items) => {
    return items.blogTitle.toLowerCase().includes(companyFilters.toLocaleLowerCase());
  })

  console.log(blogproductData);
  const filterdChange = (event) => {
    let userSelected = +event.target.value;
    let filterdValues = blogproductData.filter(
      (data) => data.blogPrice > userSelected
    );
    setFilterData(filterdValues);
  };

  const navigate = useNavigate();

  const getBlogProductId = (id) => {
    navigate(`/blogproduct/${id}`);
  };
  const [loading, setLoading] = useState(true);

  const blogAllData = async () => {
    const response = await fetch("/addblogproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const blogproductD = await response.json();
    setBLogProductData(blogproductD);

    if (blogproductD) {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCompanyFilters(e.target.value);
    console.log(companyFilters);
  }

  useEffect(() => {
    blogAllData();
  }, []);

  return (
    <div className="blog-products-maincontainer">
      <div className="blog-container">
        <div className="blog-filter-container">
          <h2>PRODUCTS FILTERS</h2>
          <div className="companyfilter-container">
            <label for="companyfilter">Company Filters</label>
            <br />
            <select name="companyfilter" id="company"  value={companyFilters} onChange={handleChange}>
              {companyF.map((ele) => {
                return (
                  <>
                  <option value={ele}>{ele}</option>
                  </>
                )
              })}
            </select>
          </div>

          <div className="pricefilter-container">
            <label for="pricefilter">Price Filters</label>
            <br />
            <select name="pricefilter" id="price" onChange={filterdChange}>
              {priceFiltersData.map((ele) => {
                return (
                  <>
                    <option value={ele}>Greater than {ele}</option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="categoty-filter-container">
            <label for="category-filter">Category Filters</label>
            <br />
            <select name="category-filter" id="category">
              {categoryFilters.map((ele) => {
                return (
                  <>
                    <option value={ele}>{ele}</option>
                  </>
                );
              })}
            </select>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="blog-products-container">
            {filteredCompanyData.map((products) => {
              return (
                <>
                  <div>
                    <div
                      className="products-blog-boxes"
                      onClick={() => {
                        getBlogProductId(products._id);
                      }}
                    >
                      <img src={products.blogSelectedImage} alt="" />
                      <div className="blog-des">
                        <p>
                          <b>Description : </b> {products.blogDes}
                        </p>
                      </div>
                      <div className="blog-des">
                        <p>
                          <b>TItle : </b> {products.blogTitle}
                        </p>
                      </div>
                      <div className="blog-p">
                        <p>
                          <b>Price : </b>${products.blogPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogProducts;
