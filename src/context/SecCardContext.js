import { createContext, useContext, useState } from "react"
import {data} from '../data/item'
import { ToastContainer, toast } from 'react-toastify';



export const appContext = createContext()

export const AppProvider = ({children})=>{
    const [cartItem, setCartItem] = useState([])
    const [sigleItem,setSingleItem] = useState([])
    const [quantity,setQuantity] = useState(1)
    const [check,setCheck] = useState(false);
    // add single item in cart
    const getId = (id)=>{
        if(cartItem.find((item)=> item.id === id)){
            // alert("Already Exist in Cart")
        }else{
        check && data.filter((item)=> item.id === id ? setCartItem([...cartItem,item]):null)
        
        }
        console.log(cartItem);
    }
    // get sigle item
    const getSigleItemID = (id)=>{
            setSingleItem(data.find( (item)=> item.id == id)) 
    }
    // remove single item from cart
    const removeItem =(id)=>{
        
        setCartItem(cartItem.filter((item)=> item.id != id))
        console.log(id);
    }
    // Increment Individual Item
    const increment = (id)=>{
        let selected =  cartItem.find((item)=> item.id === id)
        if(selected.amount < selected.max)
        selected.amount = selected.amount +1
        setQuantity(selected.amount)


        

    }
    console.log(cartItem);
        
    // Decrement Individual Item
    const decrement = (id)=>{
        let selected =  cartItem.find((item)=> item.id === id)
        if(selected.amount > 1)
        selected.amount = selected.amount -1
        setQuantity(selected.amount)  


    }
    // Give Permission to the Router
    const permission = (ans)=>{
        setCheck(ans)
        setCartItem([])
    }
   console.log(check);

    return(
        <appContext.Provider value={{getId,getSigleItemID,permission,check,cartItem,sigleItem,removeItem,increment,decrement,quantity}}>
            {children}    
            <ToastContainer />

        </appContext.Provider>
    )
}

// const AppContext = ()=>{
//     return(
//         useContext(appContext)
//     )
// }

// export default AppContext;