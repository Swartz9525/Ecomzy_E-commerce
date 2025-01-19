import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
    const sub_description=`${item.description.substring(0,100)}..`;
    const dispatch = useDispatch();
    const removeToCart=()=>{
        dispatch(remove(item.id))
        toast.success("Item removed")
    }
  return (
    <div className='w-[90%] h-auto flex justify-center items-center  bg-gray-100 shadow-sm shadow-gray-700 rounded-lg'>
        <div className='flex justify-center gap-8 p-2'>
            <div className='flex justify-center items-center'>
                <img src={item.image} className='w-[8rem] h-[10rem]'/>
            </div>
            <div className='flex flex-col gap-16 max-w-[70%] '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-slate-800'>{item.title}</h1>
                <h1 className='text-gray-700'>{sub_description}</h1>
            </div>
            <div className='flex justify-between p-2'>
                <p className='text-green-500 font-bold'>₹{item.price}</p>
                <div className='w-10 h-10 rounded-full bg-red-200 flex justify-center items-center cursor-pointer' onClick={removeToCart}>
                <MdDelete />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem