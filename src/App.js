import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart'; 
import toast, { Toaster } from 'react-hot-toast';
import PaymentProcess from './Pages/PaymentProcess';
import PaymentCheckout from './Pages/PaymentCheckout';
function App() {
  return (
    <div>
       <Toaster/>   
       <nav className='w-full fixed z-40'>
          <NavBar/>
       </nav>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/PaymentProcess' element={<PaymentProcess/>}/>
          <Route path='/PaymentCheckout'element={<PaymentCheckout/>}/>
       </Routes>
    </div>
  );
}

export default App;
