import axios from 'axios';
import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Addcars = () => {
  // declaring state variables
  const[product_name,setProductName] = useState('');
  const[product_description,setProductDescription] = useState('');
  const[product_cost,setProductCost] = useState('');
  const[product_photo,setProductPhoto] = useState('');
// status messages
const[loading,setLoading] = useState("")
const[error,setError] = useState("")
const[success,setSuccess] = useState("")

  // function to add product
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading("please wait ...")
  try {
    // retrieve product details
    const formData=new FormData();
    formData.append("product_name",product_name)
    formData.append("product_description",product_description)
    formData.append("product_cost",product_cost)
    formData.append("product_photo",product_photo)

    // posting data to base url(api)
    const response = await axios.post("https://frankoryx.alwaysdata.net/api/add_product",formData)
    setLoading("")
    setSuccess(response.data.success)
  } catch (error) {
    setError(error.message)
  }
  }
  return (
    <div className='row justify-content-center'>
      <Navbar/>
      <nav>
        <Link to="/" className='btn btn-dark'>GET ALL PRODUCTS</Link>
      </nav>
      {error}
      {success}
      {loading}
      <div  className='col-md-6 card cover  m-2 p-4'>
        <h1 className='text-primary'>Addcars</h1>
        <form onSubmit={handleSubmit}>
         <input type="text" 
         placeholder='product_name' 
         className='form-control'
         value={product_name}
         onChange={(e) =>setProductName(e.target.value)}
         required
         /><br/>
           <textarea
           placeholder='product_description' 
           className='form-control'
            value={product_description}
           onChange={(e) =>setProductDescription(e.target.value)}
           required>
           
           </textarea>
          <input
           type="number" 
          placeholder='product_cost' 
          className='form-control'
           onChange={(e) =>setProductCost(e.target.value)}
           value={product_cost}
           required
          /><br/>
          <input 
          type="file" 
          placeholder='product_photo' 
          className='btn btn-outline-info w-100'
           onChange={(e) =>setProductPhoto(e.target.files[0])}
           accept="image/*"
           required
          /><br /><br />
           <input 
           type="submit" 
           value="Submit"
            className='btn btn-outline-danger w-100'
            /><br />
        </form>
      </div>
   
    </div>

  )
}

export default Addcars
