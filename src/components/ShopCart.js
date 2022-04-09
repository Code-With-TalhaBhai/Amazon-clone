import React from 'react';
import styled from 'styled-components';

function ShopCart() {
    return (
        <Container>
               <h1>Shopping Cart</h1>
            <hr style={{margin:'20px 0'}}/>
            <ShopProduct>
                <ShopPic>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126613000" alt="" />
                </ShopPic>
                <ShopTit>
                    <h2>New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 512GB) - Space Gray (4th Generation)</h2>
                    <ShopTitbtn>
                        <button>Qty:7</button>
                        <p>Delete</p>
                    </ShopTitbtn>
                </ShopTit>
                <ShopPrice>
                    <h3>$1249</h3>
                </ShopPrice>
            </ShopProduct>
            <hr/>
            <ShopProduct>
                <ShopPic>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000" alt="" />
                </ShopPic>
                <ShopTit>
                    <h2>New Apple Macbook pro M1 chip with (8‑core CPU, 8‑core GPU, and 16‑core Neural Engine) 8GB unified memory</h2>
                    <ShopTitbtn>
                        <button>Qty:7</button>
                        <p>Delete</p>
                    </ShopTitbtn>
                </ShopTit>
                <ShopPrice>
                    <h3>$1449</h3>
                </ShopPrice>
            </ShopProduct>
            <hr/>
        </Container>
    )
}

export default ShopCart

const Container = styled.div`
    flex:0.8;
    // border-bottom:2px solid rgba(0,0,0,0.3);;
    padding:20px;
`;

const ShopProduct = styled.div`
    padding:20px 0;
    display:flex;
    // align-items:center;
    justify-content:space-between;
`
const ShopPic = styled.div`
    // border:2px solid green;
    margin:0 20px;
    max-width: 230px;
    max-height:230px;
      img{
        // border:2px solid red;
        width:100%;
        height:100%;
        object-fit:contain;
      }
`
const ShopTit = styled.div`
      color:#007185;
      font-size:18px;
`;
const ShopTitbtn = styled.div`
    //   border:2px solid green;
      margin:30px;
      display:flex;
      align-items:center;
      button{
        margin:20px;
        padding:5px 10px;
      }
`;
const ShopPrice = styled.div``;