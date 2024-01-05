import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const H2 = styled.h2`
    text-align: center;
    margin: 20px;
`


const Cancel = () => {
  return (
    <Container>
    <H2>Order Canceled</H2>
    <Link to="/">
      <button style={{ padding: 10} }>Continue Shopping</button> 
    </Link>
    </Container>
  )
}

export default Cancel