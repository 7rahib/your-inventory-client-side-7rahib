import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div >
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/HNJJvM9/ware1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Warehouse Made Digital</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/ZWqGnDH/ware2.jpg'
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Warehouse at your hand</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/d4rYKJN/ware3.jpg'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fast and Reliable</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;