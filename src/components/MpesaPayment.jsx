import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const MpesaPayment = () => {

  const location = useLocation();
  const car = location.state?.car;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://frankoryx.alwaysdata.net/static/images/"

  if (!car) {
    return <h3>No car selected. Go back and try again.</h3>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we process your transaction...");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", car.car_cost);

      const response = await axios.post(
        "https://frankoryx.alwaysdata.net/api/mpesa_payment",
        formData
      );

      setSuccess(response.data.message);
      setLoading("");

    } catch (err) {
      setError(err.message);
      setLoading("");
    }
  };

  return (
    <div className='row justify-content-center mt-2'>
      <Navbar/>
      

      {loading}
      {success}
      {error}

      <div className='col-md-6 card shadow m-2 p-4 bg-success text-light mb-2'>
        <h3>LIPA NA M-PESA</h3>
        <img src={img_url + car.product_photo} alt="" height={450} />

        <div>
          <h5>Car Name: {car.product_name}</h5>
          <p>Car cost: {car.product_cost}</p>

          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder='Enter phone number'
              className='form-control'
              onChange={(e) => setPhone(e.target.value)}
            /><br/>

            <button className='btn btn-primary w-75 m-2'>
              Make Payment
            </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default MpesaPayment;