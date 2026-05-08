import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

// import fb from './fb.png'
// import ig from './in.png'
// import x from './x.png'

function Getcars() {
  // declaring state variables
  const[cars,setcars] = useState([]);
  const[loading,setLoading] = useState("");
  const[error,setError] = useState("");

  // image url
  const img_url = "https://frankoryx.alwaysdata.net/static/images/"

  // navigation
  const navigate = useNavigate()

  // fucntion to fetch cars from database
  const getcars = async()=>{
    setLoading("Please wait , we are retrieving the cars....")
    try{
      const response = await axios.get("https://frankoryx.alwaysdata.net/api/product_details")
      setcars(response.data)
      setLoading("")

    }catch (error){
      setError(error.message)

    }
  }

  // preallocate resources using useEffect
  useEffect(()=>{
    getcars()
  },[]);

  return (
    <div className='container-fluid p-0 mt-4'>

      <Navbar/>
     

      {/*  Carousel  */}
      {cars.length > 0 && (
        <Carousel className="mb-4">
          {cars.slice(0, ).map((car) => (
            <Carousel.Item key={car.id}>
              <img
                className="d-block w-100"
                src={img_url + car.car_photo}
                alt={car.car_name}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>{car.car_name}</h3>
                <p className='text-warning'>Ksh {car.car_cost}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      
      <h3 className='text-warning bg-success'>Pick out your best car.</h3>
       

      {loading}
      {error}

      {/* cars card designs */}
      <div className='row'>
        {cars.map((car)=>(
          <div className='col-md-3 justify-content-center mb-4' key={car.id}>
            <div className='card shadow card-margin'>
              {/* car image */}
              <img className='mt-4 car_img image' src={img_url+car.car_photo} alt={car.car_name} />
              {/* car deatails */}
              <div className='card-body'>
                <h5 className='mt-2'>{car.car_name}</h5>
                <p className='text-muted'>{car.car_description}</p>
                <b className='text-warning'>Ksh.{car.car_cost}</b><br />
                <button className='btn btn-primary mt-2 w-100' onClick={()=>navigate("/Mpesapayment",{state:{ car }})}>Purchase Now</button>
              </div>
            </div>
            
          </div>
          
        ))}

        </div>
        

    {/* Social media section */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mx-auto text-center">
          
        </div>
      </div>
    </div>
    
    </div>

    
  )
  
}


export default Getcars
