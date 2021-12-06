import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={200} height={250} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div>{product.name}</div>
                    <div className="d-flex align-items-center">
                        <div>5</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;