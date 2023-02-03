import { useContext } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'
import {appContext} from '../context/SecCardContext'
import { data } from '../data/item';
export const CartItem = ({value}) => {
const {id,title,price,image,rating} = value;

const {getSigleItemID,getId}= useContext(appContext);

  return (
    <>
    <div>
         <div className='flex z-10  rounded-xl  mb-10 h-5/5 flex-col  w-5/5 border-xl bg-#FAFAFA drop-shadow-xl'>
                <div className='h-sm w-xl '>
                <img  className=' relative z-0 h-80   rounded-t' width="300" height="100" alt='a' src={image}/>
                </div>
                {/* product description */}
                <div className='flex flex-col p-5 gap-2'> 
                <div className='flex justify-between'>
                <NavLink onClick={()=> getSigleItemID(id)} to="/singleproduct"  className='text-xl flex w-50 cursor-pointer '>{title.slice(0,10)}...</NavLink>
                </div>
                <span className=''>⭐⭐⭐⭐⭐ <span>({rating.rate})</span></span>
                <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold'>${price}</span>
                <button onClick={()=> getId(id)}  className=' bg-sky-500 text-white p-2 px-4 hover:bg-sky-700 rounded-lg'>Add to Cart</button>
                </div>
                </div>
                
            </div>
    </div>
    </>
  )
}
