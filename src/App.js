import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Getcars from './components/Getcars';
import Mpesapayment from './components/MpesaPayment';
import Addcars from './components/Addcars';




function App() {
  return (
    <Router>
      <div className="App">

       
        <div className='app-header'>
          <h1 className='text-warning'>Welcome To luxurycarVisit</h1>

           {/* collapsed the entire navbar into a component */}
            
        </div>

        

        {/* Routing the components */}
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addcars' element={<Addcars />} />
          <Route path='/' element={<Getcars />} />
          <Route path='/Mpesapayment' element={<Mpesapayment />} />
          <Route path='Footer' element={<Footer />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>

    
  );
  
}

export default App;