import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const signup = () => {

// declaring state variables
const[username,setUsername] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[password,setPassword] = useState("")
 

// status messages
const[loading,setLoading]= useState("")
const[error,setError]= useState("")
const[success,setSuccess]= useState("")

// function signup
const submitsignupDetails =async(e)=>{
  e.preventDefault()
  setLoading("pleace wait ...")
  try {
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("password",password);

    // adding base url
    const response = await axios.post("https://frankoryx.alwaysdata.net/api/signup",formData);

    // reset values
    setPhone("")
    setUsername("")
    setPassword("")
    setEmail("")

    setSuccess(response.data.success)
    setLoading("")
  } catch (error) {
    setError(error.message)
  }

}
  return (
    <div className='row justify-content-center '>
      <div className='col-md-6  m-2 p-4  '>
        <h1 className='text-primary'>signup</h1>
        {/* binding variables */}
          {loading}<br/>
          {error} <br/>
          {success}<br/>

        {/* signup form */}
        <form onSubmit={submitsignupDetails}>
          <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)} /><br />
          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} /><br />
          <input type="tel" placeholder='Enter phone number' className='form-control' onChange={(e)=>setPhone(e.target.value)}/><br />
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />
          <input type="submit" value="signup" className='btn btn-outline-warning w-100'/><br />
        {/* Incase someone has an account */}
        <Link to='/signin'>Already have an account ? Signin</Link>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default signup
