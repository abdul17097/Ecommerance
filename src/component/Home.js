import { CartItem } from './CartItem'
import {data} from '../data/item'

export const Home = () => {

  return (
    <>
        <div className='flex justify-around flex-wrap p-10 h-full w-full' >
            {data.map((item)=>{
             return <CartItem value={item} key = {item.id}/>

            })}
        </div>
    </>
  )
}
