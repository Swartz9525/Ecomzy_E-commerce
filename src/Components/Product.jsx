import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
const Product = ({id,post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const RemoveToCart=()=>{
     dispatch(remove(post.id));
     toast.success('Item Removed')
  }
  const AddToCart=()=>{
    dispatch(add(post))
   toast.success('Item Added')
  }
  const sub_des=`${post.description.substring(0,55)}...`
  const sub_title=`${post.title.substring(0,20)}...`
  return (
    <div className='w-[18rem] h-[23rem] bg-gray-100 rounded-2xl cursor-pointer flex justify-center  border-gray-300 border shadow-sm shadow-gray-500 hover:shadow-md hover:shadow-gray-800 hover:scale-110 transition duration-300 ease-out'>
        <div className='w-full flex justify-center items-center flex-col p-4 gap-3'>
          <div className='text-nowrap font-bold text-slate-900 flex justify-start items-start px-2  w-full'>
            <p>{sub_title}</p>
          </div>
          <div className='font-medium text-gray-600 flex justify-start items-start px-2  w-full'>
            <p>{sub_des}</p>
          </div>
          <div>
            <img src={post.image} className='w-[10rem] h-[11rem]'/>
          </div>
          <div className='flex justify-between items-center w-full px-2 py-2'>
            <p className='text-green-500 font-bold'>₹{post.price}</p>
            {
             cart.some((p)=>p.id==post.id)?
             (<button onClick={RemoveToCart} className='w-[5rem] h-[2.1rem] text-sm rounded-xl bg-red-200 text-red-500 font-semibold'>Remove</button>):
             (<button onClick={AddToCart} className='w-[5.3rem] h-[2.1rem] text-xs rounded-xl bg-slate-900 text-gray-100 font-semibold'>Add to Cart</button>)
            }
          </div>
        </div>
    </div>
  )
}

export default Product