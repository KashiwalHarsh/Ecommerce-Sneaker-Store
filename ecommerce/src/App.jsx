import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navigate } from 'react-router'
import { useSelector } from "react-redux"
import { useLayoutEffect } from 'react'
import { useLocation } from "react-router-dom"

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
} 

const App =()=>{
    const user = useSelector((state)=>state.user.currentUser)
    // console.log(user)
    return (
        <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:category" element={<ProductList/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/success/:id" element={<Success/>}/>
                <Route path="/cancel" element={<Cancel/>}/>
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Wrapper>
        </BrowserRouter>
    )
}

export default App