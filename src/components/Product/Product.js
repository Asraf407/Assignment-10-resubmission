import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  console.log(props);
  const {image,name,price, quantity,_id}= props.product;

   console.log(props.product);
    return (
        <Link to ={`/Orders/${name}`} >
        
<CardGroup className='product_card'>
  <Card >
    <Card.Img variant="" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <h6>price:{price}  Quantity:{quantity} </h6>
    </Card.Body>
    <Button type="submit">Buy Now</Button>
    </Card>
    </CardGroup>                
   </Link>
    );
};

export default Product;