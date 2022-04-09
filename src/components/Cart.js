import React from 'react'
import ShopCart from './ShopCart'
import TotCart from './TotCart'
import styled from 'styled-components'
import Header from './Header'

function Cart() {
    return (
        <Container>
            <ShopCart/>
            <TotCart/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    margin:30px 0;
    background-color:white;
    // border:2px solid yellow;
    `