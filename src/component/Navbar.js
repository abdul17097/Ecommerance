import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { CiSquareRemove } from 'react-icons/ci';
import { Cart } from './Cart';
import {appContext} from '../context/SecCardContext'


export const Navbar = () => {
    const [hide, setHide] = useState(false)
    const {cartItem,permission,check} =useContext(appContext);
    let totalPrice = 0
    let cartItems = 0
    console.log(check);
    const handleuser = ()=>{
        permission (false)
    }
  return (
    <>
<div className='w-full flex h-16 justify-between    px-6  items-center border  drop-shadow-xl'>
        <div>
        <h1 className=' text-2xl'>ShoeStore</h1>
        
        </div>
        {/* Left Side */}
        <div className='flex gap-5'>
            <div className='flex items-center gap-1'>
                <span><AiTwotoneHome className='text-lg text-#71717A'/></span>
                <p className='text-lg text-#71717A'><NavLink to="/home">Home</NavLink></p>

            </div>
           
            <div className='flex items-center gap-1 relative'>
                <span><BsFillCartFill className='text-lg text-#71717A'/></span>
                <button onClick={()=> setHide(true)} className='text-lg cursor-pointer text-#71717A'>Cart</button>
                <span className='w-5 h-5 text-white absolute top-0 right-0 flex justify-center items-center rounded-2xl bg-red-400'>{cartItem.length}</span>

            </div>
            {/* <div className='flex items-center gap-1'>
                <span><BsFillPersonFill className='text-lg text-#71717A'/></span>
                <p className='text-lg text-#71717A'><NavLink to="contact">Contact</NavLink></p>

            </div> */}
            
            <button onClick={()=>{handleuser()}} className='flex py-2 px-4  font-bold bg-black text-white cursor-pointer border rounded-md'>
                <NavLink to="/login">{check ? "LogOut":"Login" }</NavLink></button>
        </div>
        
    </div>
    <div className='flex absolute w-2/5  flex-col z-50 bg-white border p-3 top-0 h-full overflow-auto right-0' style={{display:hide === true? "": "none"}} >
        <div className='flex items-center   h-10 border-blue-700 justify-between text- w-full'>
        <h2 className='text-xl ' >Shopping Cart</h2>
        <span className='flex cursor-pointer'><CiSquareRemove onClick={()=> setHide(false) } style={{width:"50px",fontSize:"50px",border:"none"}}/></span>
        
        </div> 
        <hr className='mt-1 '/>
        <div className='h-4/6 overflow-auto'>
            {/* Cart Item */}
            {cartItem.map((item)=>{
            cartItems += item.amount + item.amount 
            totalPrice += item.price * item.amount
            return(
                <Cart data={item} key={item.id}/>

            )
}
            )}
            {/* Cart Item */}

        </div> 
        {/* Total Price start */}
        <div className=' h-2/6 flex flex-col p-4 gap-5'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-lg'>Shipping Price</h1>
                <span className='font-thin text-xl'>$ {totalPrice && 20}</span>
            </div>
            <div className='flex justify-between'>
                <h1 className='font-bold text-lg'>Total Price</h1>
        
                <span className='font-thin text-xl'>$ {Math.round(totalPrice)}</span>
            </div>
            <div>
                <button className='flex bg-black w-full text-white items-center justify-center py-3 rounded-2xl text-lg'>Check Out</button>
            </div>

        </div>
        {/* Total Price end */}
        
    </div>
    </>
  )
}
