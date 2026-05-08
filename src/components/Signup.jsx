import axios from 'axios';
import  { useState } from 'react'
import { Link } from 'react-router-dom';

import Navbar from './Navbar';





function Signup() {
      // declaring state variables
const[username,setusername] = useState("");
const[email,setusEmail] = useState("");
const[phone,setPhone] = useState("");
const[password,setPassword] = useState("");

// status messages
const[loading,setLoading] = useState("")
const[error,setError] = useState("")
const[succecss,SetSuccess] = useState("")

const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading("Please Wait")
    try{
        const formData = new FormData();
        formData.append("Username",username)
        formData.append("email",email)
        formData.append("phone",phone)
        formData.append("password",password)

        const response = await axios.post("https://vincentfungo.alwaysdata.net/api/signup",formData)
        SetSuccess(response.data.succecss)
        setLoading("")

    }catch (error){
        setError(error)

    }
}
    
  return (
    <div className='row justify-content-center'>
        <Navbar/>
        
        <div className='col-md-6 card shadow m-2 p-4 bg-success'>
            <h1>Signup</h1>
            

             {/* binding variables */}
                {loading}<br/>
                {error}<br/>
                {succecss}<br/>


            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Enter Username' className='form-control' onChange={(e)=>setusername(e.target.value)}/><br /><br />
                <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>setusEmail(e.target.value)}/><br /><br />
                <input type="tel" placeholder='Enter Phone Number' className='form-control' onChange={(e)=>setPhone(e.target.value)}/><br /><br />
                <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                <input type="submit" value={"signup"} className='btn btn-primary w-75'/><br /><br />

                 Already have an account?<Link to='/signin' className='text-light'>Signin</Link>

                

            </form>
        </div>
    </div>
  )
}

export default Signup
