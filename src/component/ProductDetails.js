import React ,{useContext}from 'react'
import {appContext} from '../context/SecCardContext'

export const ProductDetails = () => {
const {sigleItem,getId}= useContext(appContext);


  return (
    <>
   

        <div className='flex justify-center items-center mt-24 h-full gap-10'>
            <div className='flex border w-1/5  h-1/5'>
            <img className='rounded' src={sigleItem.image} alt='' />
            </div>
            <div className='flex flex-col items-start gap-5 w-2/5'>
                <h1 className='text-5xl' >Wild Rider layer</h1>
                <p className='font-thin text-lg'>{sigleItem.description}</p>
                <span className='text-3xl font-bold'>${sigleItem.price}</span>
                <button className='bg-black text-white p-3 rounded text-lg' onClick={()=> getId(sigleItem.id)} >Add to Cart</button>
            </div>
        </div>
    </>
  )
}
