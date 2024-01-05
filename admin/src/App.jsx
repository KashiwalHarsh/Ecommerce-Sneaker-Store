import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login"
import { Navigate } from 'react-router'
import {BrowserRouter,Routes,Route,Outlet} from "react-router-dom";
import {styled} from "styled-components"

const Container = styled.div`
    display: flex;
    margin-top: 10px;
`
// const Link = styled.div`
//     text-decoration: none;
//     color: inherit;
// `

const Layout = () => (
  <>
    <Topbar />
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  </>
);


function App() {

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin

  //Logout Jugad
  // {"user":"{\"currentUser\":{\"_id\":\"64f1ce634a14189142b2ab6c\",\"username\":\"admin\",\"email\":\"admin@gmail.com\",\"isAdmin\":false,\"createdAt\":\"2023-09-01T11:43:31.167Z\",\"updatedAt\":\"2023-09-01T11:43:31.167Z\",\"__v\":0,\"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFjZTYzNGExNDE4OTE0MmIyYWI2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTM4OTg3MiwiZXhwIjoxNjk1NjQ5MDcyfQ.-H1uY2dREMbRja0X1H47VUpo5b8gbmhFmy6cCIfv2H8\"},\"isFetching\":false,\"error\":false}","_persist":"{\"version\":1,\"rehydrated\":true}"}
  
  
  // const user = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser

  console.log(admin)
  // console.log(user)
  // if(user){console.log(1)}else{console.log(0)}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={admin ? <Navigate to="/" /> : <Login/>} />
          {admin && (
          <Route element={<Layout />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/users" element={<UserList/>}/>
              <Route path="/user/:userId" element={<User/>}/>
              <Route path="/newUser" element={<NewUser/>}/>
              <Route path="/products" element={<ProductList/>}/>
              <Route path="/product/:productId" element={<Product/>}/>
              <Route path="/newproduct" element={ <NewProduct/>}/>
          </Route>
          )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
