import React, { Component } from "react";
import data from "./data.json"
import ServiceCards from "../service-cards";

class ServiceGallery extends Component {
    state = {
        data,
    };

    render() {
        return (
            <>
                {this.state.data.map(item => (
                    <ServiceCards
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        alt="" />
                ))}
            </>
        );
    }
}

export default ServiceGallery;
