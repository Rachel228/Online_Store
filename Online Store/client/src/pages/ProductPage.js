import React, {useEffect, useState} from 'react';
import {Button, Container, Col, Image, Row, Card, Toast} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../http/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
            <Col md={4}>
                <Image width={300} height={400} src={process.env.REACT_APP_API_URL + product.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{product.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}>
                        5
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 42, border: '5px solid lightgray'}}
                >
                    <h3> {product.price} $.</h3>
                    <Col xs={6}
                         style={{background: "red"}}
                    >
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Примірка</strong>
                            </Toast.Header>
                            <Toast.Body >Записатись на примірку можна за номером +38 (096) 701 07 68</Toast.Body>
                        </Toast>
                    </Col>
                    <Col xs={6}>
                        <Button
                            style={{background: "red"}}
                            className="d-flex align-items-center justify-content-center"
                            onClick={() => setShow(true)}>Запис на примірку</Button>
                    </Col>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {product.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ProductPage;