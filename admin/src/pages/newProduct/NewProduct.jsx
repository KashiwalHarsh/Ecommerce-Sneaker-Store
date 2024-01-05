import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { addProducts } from "../../redux/apiCalls";
import {useDispatch} from "react-redux"

export default function NewProduct() {

  const [inputs,setInputs] = useState({})
  const [imgFile,setImgFile] = useState("")
  const [cat,setCat] = useState([])
  const dispatch = useDispatch();

  const handleChange=(e)=>{
    setInputs(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const handleCat=(e)=>{
    setCat(e.target.value.split(","))
  }

  const handleClick=(e)=>{
    e.preventDefault();

    const fileName = new Date().getTime() + imgFile.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', downloadURL);
          // console.log({...inputs, img: downloadURL, categories: cat})
          const product = {...inputs, img: downloadURL, categories: cat}
          addProducts(product,dispatch)
        });
      } 
    );   
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setImgFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Product Name" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Description..." onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="599" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Slippers,Sneakers" onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
