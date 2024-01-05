import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
    background-color: black;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    ${mobile({height:"50vh" })}

`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    color: white;
    margin: 20px;
`
const Button = styled.button`
    background-color: white;
    padding: 10px;
    border: none;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem