import React,{useContext,useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneHome } from 'react-icons/ai';
import {appContext} from '../context/SecCardContext'


export const Cart = ({data}) => {
const {removeItem,increment,decrement,quantity}= useContext(appContext);


    return (
        <>
          <div className='flex mt-5 h-1/3  mb-1 justify-between'>
            <div className='flex gap-8'>
            <div className='border  flex rounded-xl'>
            <img src={data.image}
            width='120px' height='500px' 
            className='bordered object-contain rounded-xl '
            />
            </div>
            <div className='flex flex-col justify-between py-2'>
                <div>
                <h1 className='text-lg'>{data.title.slice(0,20)}</h1>
                </div>
                <span className='font-thin p-1' >Qty {data.amount} </span>

                {/* Increment & Decrement start*/}
                <div className='flex  items-center gap-3'>
                    <span  onClick ={()=> increment(data.id)} className='flex  justify-center items-center cursor-pointer bg-slate-200 w-6 rounded-xl h-6' ><AiOutlinePlus/></span>
                    <span onClick ={()=> decrement(data.id)} className='flex justify-center items-center cursor-pointer bg-slate-200 w-6 rounded-xl h-6' ><AiOutlineMinus/></span>

                </div>
                {/* Increment & Decrement end*/}

            </div>
            </div>
            <div className='flex flex-col h-full justify-between py-2 items-end'>
                <span  className='text-xl'>${data.price * data.amount}</span>
        
                <button className='text-blue-700' onClick={()=> removeItem(data.id)}>remove</button>
            </div>

        </div>
        </>
    )
}
