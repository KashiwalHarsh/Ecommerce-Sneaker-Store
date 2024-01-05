import { KeyboardArrowLeft,KeyboardArrowRight  } from '@mui/icons-material';
import React,{useState} from 'react';
import styled from 'styled-components';
import {sliderItems} from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex; 
    position: relative;
    overflow: hidden;

    ${mobile({display:"none" })}

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=>  props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 50px;

`
const Desc = styled.p`
    margin: 30px 0px 40px 0px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.p`
    padding: 10px;
    font-size: 20px;
    border: 2px solid #a2e1a2;
    background-color: transparent;
    cursor: pointer;
    display: inline;
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        { 
            sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))
        }
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRight/>
        </Arrow>
        
    </Container>
  )
}

export default Slider