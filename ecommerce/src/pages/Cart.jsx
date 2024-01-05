import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove, Delete } from '@mui/icons-material'
import {mobile} from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js';
import { removeAllProduct, removeProduct } from '../redux/cartRedux'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    margin-bottom: 80px;

    ${mobile({padding:"10px",marginBottom:"20px" })}

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type==="filled" ? "none" : "1px solid grey"};
    background-color: ${(props)=>props.type==="filled" ? "black" : "transparent"};
    color: ${(props)=>props.type==="filled" && "white"};
`
const TopTexts = styled.div`

    ${mobile({display:"none" })}
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection:"column" })}

`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection:"column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    border: 0.5px solid grey;
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({margin:"5px 15px" })}

`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({marginBottom:"20px" })}

`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`    
    font-weight: 200;
`
const SummaryItem = styled.div`    
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type==="total" && "500"};
    font-size: ${(props)=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.span`    
    
`
const SummaryItemPrice = styled.span`    
    
`
const Button = styled.button`    
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const makePayment = async()=>{
        const stripe = await loadStripe(KEY);

        const body = {
            products:cart.products,
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:3000/api/checkout/payment",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        })
        const session = await response.json();
        
        const result = stripe.redirectToCheckout({
            sessionId:session.id,
        })
        if(result.error){
            console.log(result.error)
        }
    }

    const handleClick = ()=>{
        dispatch(removeAllProduct())
    }
    const handleDelete = (id,price) => {
        dispatch(removeProduct({id,price}))
    };


    return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton onClick={handleClick} type="filled">Empty Cart</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cart.products?.map(product=>(
                <Product key={product._id}>
                    <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                            <ProductName><b>Product:</b> {product.title}</ProductName>
                            <ProductId><b>ID:</b> {product._id}</ProductId>
                            <ProductColor color= {product.color}/>
                            <ProductSize><b>Size:</b> {product.size}</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <Delete onClick={()=>handleDelete(product._id,product.price*product.quantity)} sx={{marginBottom: 3, color:'grey'}}/>
                        <ProductAmountContainer>
                            <Remove />
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Add />
                            </ProductAmountContainer>
                        <ProductPrice>₹ {product.price * product.quantity}</ProductPrice>
                    </PriceDetail>
                </Product>
                ))}
                <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>₹ 599</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>₹ -599</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={makePayment}>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
    )
}

export default Cart