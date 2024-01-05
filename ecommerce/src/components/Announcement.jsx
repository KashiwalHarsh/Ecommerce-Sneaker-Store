import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #775ad8;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs. 499
    </Container>
  )
}

export default Announcement