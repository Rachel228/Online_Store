import React from 'react';
import {Carousel} from "react-bootstrap";
import Frame73 from "../assets/Frame73.jpg";
import sl1 from "../assets/sl1.jpg";
import m1 from "../assets/m1.png";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${Frame73}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover', }}
                />
                <Carousel.Caption>
                    <h5>Нова колекція</h5>
                    <p>ЛИШЕ ЕКСКЛЮЗИВНІ СУКНІ</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${sl1}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover',}}
                />
                <Carousel.Caption>
                    <h5>Колекція Allie</h5>
                    <p>Wedding Dress</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{background: `url(${m1}) no-repeat center center`, width:1080, height: 720, backgroundSize: 'cover',}}
                />
            </Carousel.Item>
        </Carousel>

    );
});

export default Basket;