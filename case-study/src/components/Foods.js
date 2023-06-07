import React from "react";
import { Carousel } from "react-bootstrap";
import '../css/Foods.css';

export const Foods = () => {
    return (
        <div className="container">
            <h1 className="h1ForFoods">Ẩm thực</h1>
        <Carousel interval={2000} controls >
            <Carousel.Item>
                <img
                    className="d-block w-100 foodImg"
                    src="/img/food1.jpg"
                    alt="Image 1"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 foodImg"
                    src="/img/food2.jpg"
                    alt="Image 2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 foodImg"
                    src="/img/food3.jpg"
                    alt="Image 3"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};
