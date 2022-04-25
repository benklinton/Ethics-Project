import React from "react";
import Navigation from "../components/navbar";
import Service from "../components/services";
import ServiceGallery from "../components/service-gallery";
import Footer from "../components/footer";

function Services() {
    return (
     <>
     <Navigation/>
     <Service/>
     <ServiceGallery/>
     <Footer/>
     </>
    );
  }

  export default Services;