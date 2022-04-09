import React from 'react'
import styled from 'styled-components';
import Products from './Products';
// import getFirestore from './Firebase';
import db from './Firebase';
import { useState } from 'react'
import { useEffect } from 'react';
import { onSnapshot, collection, doc } from '@firebase/firestore';

function Home() {
    const [state, setstate] = useState([]);
    useEffect(() => {
        let tempProduct = '';
      onSnapshot(collection(db,"Products"),(snapshot)=>{
        tempProduct=(snapshot.docs.map((doc)=>doc.data()));
           setstate(tempProduct);
        })  
        console.log(state);
    }, [])
    return (
        <Container>
              <Banner>
              </Banner>
          <Content>   
        {
                  state.map((element,index)=>{
            return <Products class={`p${index+1} g`} title={element.title} price={element.price} rating={element.rating} image={element.image} id={index} />
                  })
        }
          </Content>
          {/* <SmContent>
              <Products title=" Philips 2200 Series Fully Automatic Espresso Machine w/ Milk Frother, Black, EP2220/14" rating= "5" price="542$" image="https://images-na.ssl-images-amazon.com/images/I/71s7162fgaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>             
              <Products title="Oculus Quest All-in-one VR Gaming Headset – 64GB" rating=" ⭐ ⭐ ⭐"  price="295$" image="https://m.media-amazon.com/images/I/51odsYyURHL._SL1000_.jpg"/>             
              <Products title="Cyberpunk 2077 - PlayStation 4" rating=" ⭐ ⭐ ⭐ ⭐"  price="49$" image="https://pbs.twimg.com/media/FBUpTZjVcAYXbTy?format=jpg&name=small"/>             
          </SmContent>
          <SmContent>
              <Products title=" Philips 2200 Series Fully Automatic Espresso Machine w/ Milk Frother, Black, EP2220/14" rating= " ⭐ ⭐ ⭐ ⭐ ⭐" price="542$" image="https://images-na.ssl-images-amazon.com/images/I/71s7162fgaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>             
            </SmContent> */}

            
{/* https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632788573000 */}
{/* 1449 */}
{/* 4 */}

{/* New Apple Macbook pro M1 chip with (8‑core CPU, 8‑core GPU, and 16‑core Neural Engine) 8GB unified memory */}
        </Container>
    )
}

export default Home

const Container  = styled.div`
    max-width:100vw;
    // background-color: #DEDFE0;
`;
const GridCont  = styled.div``;
const Banner  = styled.div`
    background-image:url('https://i.imgur.com/SYHeuYM.jpg');
    background-position:center;
    background-size:cover;
    min-height:600px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    // margin-bottom:-200px;
    `;
    const Content  = styled.div`
    color:black;
    // background-color:white;
    margin-top:-300px;
    // display:flex;
    overflow:hidden;
    // border:2px solid blue;
    // max-width:1000px;
    display:grid;
    // grid-template-columns: repeat(6,auto);
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: 1fr 1fr 1fr;
`;

//     const SmContent  = styled.div`
//     display:flex;
// `;
    
