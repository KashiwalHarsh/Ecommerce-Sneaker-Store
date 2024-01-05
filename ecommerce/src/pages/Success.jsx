import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {mobile} from '../responsive'
import { useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';
const stripe = require('stripe')('sk_test_51Nlc3sSFky9YWMLrETDTSUI6DwjdxGhVFaMPHivLitHvgXCDiY36WC0050g3dX1AwHkBUMtkEW7iOfdNetaNRTjr00vG4im5my');

const Container = styled.div`

`


const SuccessContainer = styled.div`
  text-align: center;
  margin: 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
`;

const SuccessMessage = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #00a352; 
  text-transform: uppercase;
`;

const ThanksMessage = styled.h2`
  font-size: 20px;
  margin: 20px;
  color: orange; 
  font-style: italic;

`;

const OrderID = styled.p`
  font-size: 10px;
  margin-bottom: 20px;
  font-style: italic;
  
`;
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
    width: 100px;
    
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const ProductName = styled.span`
    text-transform: uppercase;
    padding-bottom: 8px;
    text-align: left;
`
const ProductId = styled.span`
  font-size: 10px;
  padding:2px

`
const ProductColor = styled.div`
  font-style: italic;
  font-size: 10px;
  padding:2px


`
const ProductSize = styled.span`
  font-style: italic;
  font-size: 10px;
  padding:2px
    
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
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    padding:2px
    ${mobile({margin:"5px 15px" })}
    
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:2px
    ${mobile({marginBottom:"20px" })}
    

`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`



const Success = () => {
    const loc = useLocation();
    const id = loc.pathname.split("/")[2];
    const orderId=id
    const user = useSelector((state)=>state.user.currentUser)
    

    const [orderedProducts,setOrderedProducts] = useState({})
    const [amount,setAmount] = useState(0)
    const [address,setAddress] = useState("")
    const [status,setStatus] = useState("")
    const [loaded,setLoaded] = useState(false)
    const [transactionComplete,setTransactionComplete] = useState(false)
    const [finalOrder,setFinalOrder] = useState({})

    useEffect(()=>{
        fetch("http://localhost:3000/api/checkout/items")
        .then((res) => res.json())
        .then((res) => {setOrderedProducts(res)})
        .catch((err) => console.error(err))
    },[])


    useEffect(()=>{
      const sessionDetails = async()=>{
        const session = await stripe.checkout.sessions.retrieve(id);
        setAmount(session.amount_total/100)
        setAddress(session.customer_details.address.country)
        setStatus(session.status)
        setLoaded(true)
      }
      sessionDetails()
    },[id])

    useEffect(()=>{
      if(loaded){
        setFinalOrder({...orderedProducts,amount:amount,address:address,status:status,userId:user._id})
        console.log({...orderedProducts,amount:amount,address:address,status:status,userId:user._id})
        setLoaded(false)
      }
    },[loaded,orderedProducts,amount,address,status,user])

    
    useEffect(()=>{
      const addOrder = async()=>{
      try{
        if(finalOrder!=null && transactionComplete===false){
            const res = await userRequest.post("/orders",finalOrder)
            console.log(res)
            if(res.status===200){
              setTransactionComplete(true)
            }
      }          
      }catch(err){console.log(err)}
    }
    addOrder()
    },[transactionComplete,finalOrder])

   

    

    return (
    <Container>
      <SuccessContainer>
        <SuccessMessage>
        Order Placed Successfully
        </SuccessMessage>
      <OrderID>Order ID: {orderId}</OrderID>
        <h3>Ordered Products:</h3>
      <Info>
          {orderedProducts.products?.map(product=>(
          <Product>
              <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                      <ProductName><b> {product.title}</b></ProductName>
                      <ProductId><b>ID:</b> {product._id}</ProductId>
                      <ProductColor>{product.color}</ProductColor>
                      <ProductSize>{product.size}</ProductSize>
                  </Details>
              </ProductDetail>
              <ProductAmount><b>Quantity</b> : {product.quantity}</ProductAmount>
              <PriceDetail>
                  <ProductAmountContainer>
                      </ProductAmountContainer>
                  <ProductPrice>₹ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
          </Product>
          ))}
        <Hr />
      </Info>
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 } }>Go to Homepage</button> 
      </Link>
      <ThanksMessage>
        Thanks for Shopping with Us
        </ThanksMessage>
      </SuccessContainer>
    </Container>
    )
}

export default Success