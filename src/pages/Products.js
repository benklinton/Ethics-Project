import React from "react";
import Navigation from "../components/navbar";
import Service from "../components/services";
import ProductGallery from "../components/product-gallery";
import Footer from "../components/footer";

function Products() {
    return (
     <>
     <Navigation/>
     <Service/>
     <ProductGallery/>
     <Footer/>
     </>
    );
  }

  export default Products;