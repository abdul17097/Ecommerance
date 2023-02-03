import { useFormik } from 'formik';
import React, { useState, useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { loginSchema } from './userSchema';
import {appContext} from '../context/SecCardContext'


const initialValues = {
  email:"",
  password:""
}
export const Login = () => {
  const {permission}= useContext(appContext);
  const navigate = useNavigate()
  const [check, setCheck] = useState(false)
  const {values,handleSubmit,handleBlur,handleChange,touched,errors} = useFormik({
    initialValues:initialValues,
    validationSchema: loginSchema,
    onSubmit:async (values) =>{
        if(!values){
          console.log("ÿou don't have data");
        }else{
          const user = await fetch("http://localhost:4000/login",{
            method: "POST",
            // credentials: 'include',
            headers: {"Content-Type":"application/json"},
            mode:'cors',
            body:JSON.stringify({
              email:values.email,
              password:values.password
            })
          })
          const data = await user.json();
          if(user.status === 200){
            window.alert('your are successfully login')
            navigate('/home')
            permission(true)
          }else if(user.status === 404){
            alert("invalid")
          }
          else{
            window.alert('Inavalid Credientialls')
          }
        }
    }
  });


// const submitHandle = async (e)=>{
//   e.preventDefault();
  
// }

  return (
    <div className='flex justify-center items-center '>
      <form onSubmit={handleSubmit} className='flex flex-col   p-5 gap-3 border drop-shadow-lg mt-10 rounded-lg  w-5/5 sm:w-2/5'>
        <h1 className='text-center font-bold text-3xl mb-5'>Login</h1>
        <label className='font-bold text-gray-500'>User Name</label>
        <input className='border p-2 focus:outline-none w-5/5'  value={values.email} onChange={handleChange} 
        onBlur={handleBlur}
        placeholder='Email'  name='email'
        />
        {errors.email && touched.email?
        <p>{errors.email}</p>:null  
      }

        <label className='font-bold text-gray-500'>Password</label>
        <input className='border p-2 focus:outline-none w-5/5' minLength="5" value={values.password} type="password" onChange={handleChange} placeholder='password'  name='password'
        onBlur={handleBlur}
        />
        {errors.password && touched.password ?
        <p>{errors.password}</p>:null
        }
        <p className='text-center mt-5'><span className='font-thin'>Not a member?</span><NavLink to="/register" className=''> Sign up</NavLink></p>




        <button type='submit'  className='flex px-4 py-2 border mt-10 w-2/4 sm:w-1/5  rounded-lg text-white font-bold bg-blue-600'>Sign up</button>
      </form>

    </div>
  )
}
