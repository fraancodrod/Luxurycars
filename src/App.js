import logo from'./logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addluxuryhouse from './components/Addluxuryhouse';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment'
function App() {
  return (
    <Router>
     <div className="App">
     <div className='App-header'>
      <h1 className='text-primary'>Welcome to LuxuryhouseDealership</h1>
     </div>
      <nav className='m-2'>
      <Link to="/signup" className='btn btn-outline-primary ms-2'>Signup</Link>
      <Link to="/signin" className='btn btn-outline-primary  ms-2'>Signin</Link>
      <Link to="/addluxuryhouse" className='btn btn-outline-primary  ms-2'>Addluxuryhouse</Link>
      <Link to="/" className='btn btn-outline-primary  ms-2'>Getproduct</Link>
      
      </nav>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='addluxuryhouse' element={<Addluxuryhouse/>}/>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>    
      </Routes>
    </div>
    </Router>
  );
}
export default App;
