import React from 'react';
import styled from 'styled-components';
// import { Link, Router } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        // <Router>
        <Container>
            <Headerlogo>
                <img src="./images/amazon-logo1.png" alt="" />
            </Headerlogo>
            <Headeraddress>
                <HeaderLoc>
                <LocationOnIcon/>
                </HeaderLoc>
                <HeaderOption>
                <HeaderLineOne>Hello</HeaderLineOne>
                <HeaderLineTwo>Select Your Address</HeaderLineTwo>
                </HeaderOption>
            </Headeraddress>
            <Headerinput>
                <input type="text" />
                <Searchcon><SearchIcon/></Searchcon>
            </Headerinput>
            <HeaderOption>
            <HeaderLineOne>Hello, Nazarify</HeaderLineOne>
                <HeaderLineTwo>Accounts & Lists</HeaderLineTwo>
            </HeaderOption>
            <HeaderOption>
            <HeaderLineOne>Returns</HeaderLineOne>
                <HeaderLineTwo>& Orders</HeaderLineTwo>
            </HeaderOption>
            <HeaderOptionCart>
                {/* <Link to='/cart'> */}
            <ShoppingBasketIcon/>
                <HeaderCartCount>4</HeaderCartCount>
                {/* </Link> */}
            </HeaderOptionCart>
        </Container>
    );
}

export default Header

const Container = styled.div`
    min-height:60px;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;
    padding:0 15px;
`;

const Headerlogo = styled.div`
    width:100px;
    margin:0 11px;
    img{
        max-width:100%;
    }
`;
const Headeraddress = styled.div`
    display:flex;

`;
const HeaderLineOne = styled.div`
    font-size:11px;
`;
const HeaderLineTwo = styled.div`
    font-size:13px;
    font-weight:800;
`;
const Headerinput = styled.div`
    height:41px;
    display:flex;
    flex-grow:1;
    overflow:hidden;
    border-radius:4px;
    background-color:white;
    input{
        border:none;
        flex-grow:1;
        &:focus{
            outline:none;
        }
    }
`;
const HeaderOptionCart = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`;
const HeaderOption = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 10px;
`;

const HeaderCartCount = styled(HeaderLineTwo)`
    font-size:16px;
    margin:0 10px;
    color:#F3A847;
`;

const Searchcon = styled.div`
    background-color:#F3A847;
    min-width:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    height:inherit;
`

const HeaderLoc = styled.div`
    margin-right:-10px;
`