import { styled } from "styled-components";
// import { popularProducts} from "../data";  demo data
import Product from "./Product";
import axios from "axios";
import { useEffect,useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
`

const Products = ({cat,filters,sort}) => {

  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  //calling api to fetch all products
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(
          cat 
          ? `http://localhost:3000/api/products?category=${cat}`
          : "http://localhost:3000/api/products"
          );
        setProducts(res.data)
        // console.log(res.data,cat)
      }catch(err){}
    };
    getProducts()
  },[cat])

  //filtering products according to the user desired filter
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        )
      )
    );
  },[products,cat,filters])

  //sorting products according ot the user desired sort
  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) =>a.createdAt - b.createdAt)
      )
    }else if(sort === "asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) =>a.price - b.price)
      );
    }else {
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) =>b.price - a.price)
    );
   }
  },[sort])

  return (
    <Container>
        {cat
        ? filteredProducts.map((item)=><Product item={item} key={item.id}/>)
        : products.slice(0,8).map((item)=><Product item={item} key={item.id}/>)
        }
    </Container>
  );
}

export default Products;