import { Facebook,Instagram,Twitter,Pinterest, Room, Phone, MailOutline } from "@mui/icons-material"
import { styled } from "styled-components"
import {mobile} from '../responsive'
import IconButton from '@material-ui/core/IconButton';
import {
    IconFlagIN
} from 'material-ui-flags';


const Container = styled.div`
    display: flex;
    background-color: #2f466c;
    color: white;
    ${mobile({flexDirection:"column" })}
    

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
    margin: 20px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    /* background-color: #${props=>props.color};*/
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({display:"none" })}

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({backgroundColor:"#2f466c" })}

`
const Title = styled.h3`
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const ContactItem = styled.div`
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const Payment = styled.img`
    width: 50%;
`

const BottomContainer = styled.div`
    background-color: #232347;
    padding: 20px;
    color: white;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${mobile({flexDirection:"column" })}
`
const BottomLeft = styled.div`

`
const BottomRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const UList = styled.ul`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    ${mobile({padding:"0px" })}

`
const Message = styled.div`
    background-color: #4d6bc6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: -5px;
    color: white;
    font-size: 20px;
    text-decoration: underline dashed;
`


const Footer = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1580 -138 1400 48" style={{backgroundColor:"#d7e6f5"}}>
    <path d="M -1019 -137 l -7 1 l -4 1 l -2 -1 h -4 l -3 1 l -3 1 l -2 -1 l -1 1 l -8 1 l -2 -1 h -4 l -5 1 l -2 1 h -5 l -2 1 l -1 -1 h -6 l -2 1 h -9 l -2 1 h -4 l -3 1 h -27 v -1 h -10 l -1 -1 h -3 l -3 1 l -1 -1 h -11 l -6 -2 v 1 h -4 l -1 1 h -10 l -2 -1 h -7 l -2 -1 h -3 l -2 -1 h -2 l -1 1 h -6 v -1 h -2 l -1 1 l -1 -1 h -1 l -3 -1 h -7 l -1 -1 h -6 l -1 1 h -3 l -1 -1 l -5 1 h -17 l -4 1 h -4 l -3 -1 h -2 l -1 -1 h -19 l -2 1 h -5 v -1 l -1 1 h -2 l -1 -1 h -9 l -1 1 l -1 -1 l -4 1 h -12 l -1 1 h -4 l -1 1 h -2 l -3 1 h -5 v 1 h -11 l -1 -1 h -6 l -2 -1 h -3 l -1 1 l -2 1 h -1 l -2 1 h -5 l -2 1 l -2 -1 h -2 l -2 -1 h -5 l -1 -1 h -2 l -2 -1 h -1 l -1 2 l -1 1 l -2 1 h -10 l -2 -1 h -6 l -1 -1 h -2 l -1 2 l -2 1 l -1 1 l -2 1 h -12 l -1 -1 h -19 l -1 1 h -6 l -1 1 l -3 -1 h -7 l -2 -2 l -1 -1 l -7 1 l -1 1 l -2 1 h -4 l -2 1 l -1 1 h -6 l -1 1 l -2 -1 l -3 1 h -9 l -1 1 h -2 l -2 1 h -2 l -1 1 h -1 l -4 1 l -3 -1 h -1 l -1 1 h -2 l -1 1 l -2 1 h -2 l -2 1 v 1 h -12 l -3 1 h -2 l -2 1 h -2 l -3 -1 l -1 1 l -1 1 h -14 V -90 H -180 v -2 h -2 v -1 v 1 h -10 l -1 -1 l -2 1 h -3 l -1 -1 h -1 V -92 h -4 l -2 -1 v -1 l -1 1 h -1 l -1 -1 V -93 l -4 -1 h -4 l -1 -1 h -2 l -1 1 h 1 l -1 1 l -1 -1 l -2 -1 h -1 l -2 1 h -7 l -2 -1 h -9 l -2 -1 h -3 l -1 1 h -4 l -2 -1 l -2 -1 l -2 1 h -8 l -1 1 l -1 -1 h -4 l -2 -1 l -3 1 h -10 l -1 -1 h -3 l -3 -1 h -1 V -97 l -2 -1 h -4 l -1 -1 h -1 l -1 1 h -5 l -3 -1 h -2 l -1 1 l -1 -1 l -1 1 l -2 -1 h -5 l -1 -1 h -1 V -98 h -1 l -2 -1 l -1 -1 h -4 h 1 l -1 1 h -1 l -2 -1 h -2 l -1 1 h -1 l -3 -1 h -20 v -1 v 1 l -1 -1 h -2 l -2 -1 h -2 l -2 -1 l -2 -1 h -6 l -1 1 h -4 l -1 1 h -2 l -5 1 l -3 -1 h -9 l -1 1 h -2 l -1 1 h -4 v -1 h -3 l -4 2 l -3 1 h -2 l -1 1 h -6 l -8 -1 l -3 -1 h -3 l -2 -1 l -1 1 h -1 l -2 1 h -9 l -4 1 l -6 2 h -6 l -2 1 h -7 l -5 1 h -1 l -1 1 h -15 l -1 -1 l -2 1 l -2 -1 h -2 l -1 1 h -1 v -1 h -1 l -6 -1 h -2 l -1 1 h -4 l -2 1 l -4 -1 h -5 l -2 -1 h -1 l -1 1 h -3 v -1 h -2 l -3 -1 h -5 l -1 1 l -1 -1 l -1 1 l -2 -1 h -6 l -2 -1 l -3 -1 h -1 l -2 1 l -2 -1 h -8 l -2 1 l -2 -1 h -4 l -2 1 l -2 -1 h -4 l -1 1 h -9 l -3 1 h -4 l -1 -1 h -4 l -2 -1 h -18 l -3 1 h -4 l -1 -1 l -1 1 h -2 l -1 -1 h -7 l -2 1 h -1 l -1 -1 l -4 1 h -11 l -2 1 h -2 V -94 l -1 -1 l -4 -1 h -1 l -2 -1 v -1 l -4 -1 l -4 -1 l -3 1 l 1 -1 h -2 l -1 -1 h -2 l 1 -1 h -2 l -3 -1 l -5 -1 l -6 -1 l -4 -1 l -2 -2 l -4 1 h -3 l -4 -2 l -2 1 h -9 l -1 -1 h -1 l -1 1 l -1 -2 l -5 1 h -2 l -3 1 l -4 -2 l -3 -1 l -5 -1 l -3 1 l -2 -2 l -1 -1 l -1 -1 h -2 l -1 -1 l -7 -2 h -1 l -1 -1 h -3 l -4 -3 l -1 1 l -4 -1 l -3 -1 h -4 l -3 -1 l -1 -1 h -4 l -2 -2 h -3 l -3 -3 h -2 l -2 -1 h -2 l -5 -1 l -1 1 l -3 -1 l -4 -2 v -1 l -7 1 l 1 -1 h -11 l -5 -2 h -3 l -2 1 v 2 l -2 1 h -9 l -3 2 l -4 -1 h -5 l -3 1 h -5 l -5 -1 l -1 -1 l -2 1 h -5 l -2 -1 h -4 l -4 -1 h -4 l -2 1 l -4 -2 h -1 l -2 1 l -2 -1 l -1 2 l -1 -1 l -2 1 l -1 -1 h -15 v -1 l -3 1 h -1 l -3 1 l -1 -1 l -1 1 h -2 l -6 -2 l -1 1 l -3 -1 h -3 l -3 -1 h -3 l -8 -2 l -5 1 v -1 l -2 1 h -1 z" fill="#4d6bc6"/>
    </svg>
    <Message>Our Platform is powered by 100% renewable electricity.</Message>
    <Container>
        <Left>
            <Logo>HARSH.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> 26/9 Dehradun 248007, Uttarakhand, INDIA </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +91 95571 95550</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> kashiwalharsh1234@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
    <BottomContainer>
        <BottomLeft>
            <h3> <IconButton><IconFlagIN /></IconButton>  India   |   English (UK)   |   ₹ (INR)</h3>
        </BottomLeft>
        <BottomRight>
            <UList>
                <li style={{paddingLeft: 13, listStyle: 'none'}}>© 2023 HARSH, Inc.</li>
                <li style={{paddingLeft: 13, listStyle: 'none'}}>Terms of Use</li>
                <li style={{paddingLeft: 13, listStyle: 'none'}}>Privacy</li>
                <li style={{paddingLeft: 13, listStyle: 'none'}}>Local Shops</li>
            </UList>
        </BottomRight>
    </BottomContainer>
    </>
  )
}

export default Footer