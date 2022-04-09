import React from 'react';
import styled from 'styled-components';
import Home from './Home';

function Products(props) {
    console.log(props)
    return (
        <Container className={props.class}>
            <Title>
           {props.title}
            </Title>
            <Price>
           ${props.price}
            </Price>
            <Rating>
                {
                    Array(props.rating).fill().map(rating=> <span>⭐</span>)
                    
                }
           {/* {props.rating} */}
            </Rating>
            <ProductCart>
            <ProductImg>
            <img src={props.image} />
            </ProductImg>
            <CartBtn>
                Add to Cart
            </CartBtn>
            </ProductCart>
        </Container>
    )
}

export default Products

const Container = styled.div`
    background-color:white;
    z-index:1;
    margin:20px;
    padding:20px;
    max-height:400px;
    // flex:1;
    // border:2px solid red;
    display:flex;
    flex-direction:column;
    // align-items:center;
    // justify-content:center;
`;

const Title = styled.div``
const Price = styled.div`
    hieght:20px;
    font-weight:700;
    padding:2px 0;
`;
const Rating = styled.div`
    padding:2px 0;
`;

const ProductCart = styled.div`
    display:flex;
    // border:2px solid blue;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`;


const ProductImg = styled.div`
    padding:4px 0;
    max-width:300px;
    max-height:250px;
    // border:2px solid green;
    img{
        width:100%;
        height:100%;
        // object-fit:contain;
    }
    // margin:10px 0;
`;
const CartBtn = styled.button`
    // background-color:#F3A847;
    background-color:rgb(243, 168, 71, 0.9);
    border:2px solid #a88734;
    border-radius:2px;
    letter-spacing:0.5px;
    padding:4px 12px;
    // height:30px;
`;