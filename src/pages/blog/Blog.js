import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BlogHeader from "../../components/blogheader/BlogHeader";
import BlogProducts from "../../components/blogProducts/BlogProducts";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <BlogProducts />
      <Footer />
    </div>
  );
};

export default Blog;
