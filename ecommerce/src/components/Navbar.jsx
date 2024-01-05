import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import logoimg from '../logo4.png'

const Container = styled.div`
    height: 70px;
    /* @media only screen and (max-width:400px){
        display: none;
    } */ //*this is used to add media query to a container,doing this for all div containers will be hecktic and repetitive so we use css from styled components
    //*instead we use it like this

    ${mobile({height:"52px"})}

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({padding:"10px 0px" })}
`
const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    ${mobile({display:"none"})}

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none" })}
`
const SearchContainer = styled.div`
    padding: 5px;
    margin-left: 25px;
    border: 0.5px solid lightgray;
    display: flex;
    justify-content: center;

    ${mobile({display:"none" })}
`
const Input = styled.input`
    outline: none;
    border: none;

    ${mobile({width:"50px" })}

`
const Center = styled.div`
    flex: 1; 
`
const Logo = styled.div`
    flex: 1;
    height: 100%;
    text-align: center;
`
const Image = styled.img`
    width: 300px;

    ${mobile({width:"200px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({flex:"2",justifyContent:"center" })}

`
const MenuItem = styled.div`
    font-size: 15px;
    margin-left: 25px;
    cursor: pointer;

    ${mobile({fontSize:"12px",marginLeft:"10px" })}

`



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:"grey",fontSize:"17px",cursor:"pointer"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Link to="/">
                    <Logo>
                        <Image src={logoimg}/>
                    </Logo>
                </Link>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGNIN</MenuItem>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
    )
}

export default Navbar

