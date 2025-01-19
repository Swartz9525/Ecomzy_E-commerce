import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));

  }, [cart]);
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='max-w-[80%] flex mt-20 p-4'>
        {
          cart.length > 0 ?
            (
              <div className='flex rounded-md'>
                <div className='w-[70%] flex gap-6 flex-col'>
                  {
                    cart.map((item, index) => {
                      return <CartItem key={item.price} item={item} itemIndex={index} />
                    })
                  }
                </div>
                <div className='bg-green-100 w-[50%] h-[20rem] flex p-5 flex-col gap-20'>
                <div  className='flex flex-col gap-3'>
                  <div className='font-bold text-3xl text-green-500 '>Your Cart</div>
                  <div className='font-semibold text-xl text-gray-800'>Summary</div>
                  <p>
                    <span className='font-medium text-gray-800'>Total Items :  {cart.length}</span>
                  </p>
                </div>
                <div className='flex flex-col gap-5 justify-start items-start'>
                  <p className=''>Total Amount: <span className='text-green-500 font-bold'>₹{totalAmount}</span></p>
                  <NavLink to={'/PaymentProcess'}>
                  <button className='w-[11rem] h-[2.5rem] text-gray-300 rounded-md font-semibold bg-slate-900'>Checkout Now</button>
                  </NavLink>
                </div>
                </div>
              </div>
            ) :
            (<div className='w-full h-screen flex justify-center items-center flex-col gap-3'>
              <h1 className='font-bold text-green-700 text-xl'>Cart Empty</h1>
              <NavLink to={'/'}>
                <button className='w-[10rem] h-[2.5rem] rounded-md bg-green-800 text-white font-bold'>Shop Now</button>
              </NavLink>
            </div>)
        }
      </div>
    </div>
  )
}

export default Cart