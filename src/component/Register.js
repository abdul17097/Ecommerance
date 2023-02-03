import React from 'react'
import { useFormik} from 'formik'
import { signupSchema } from './userSchema'
import { NavLink, useNavigate} from 'react-router-dom'


 

export const Register = () => {
const navigate = useNavigate()
const initialValues = {
  name:'',
  email:'',
  password:''
}
    
 


  const {values,handleBlur,errors,touched,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema: signupSchema,

    onSubmit: async (values)=>{
      if(!values){
        console.log("you don't have data");
      }else{
        const user = await fetch("http://localhost:4000/register",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          uname:values.name,
          email:values.email,
          password:values.password
        })
      });
      if(user.status === 201){
        alert("You are Successfull Register");
        navigate('/login')
      }else if(user.status === 401){
        alert("The Email is Already Register")
      }else{
        alert("Please try again")
      }
      }
    } 
  })
  // const submit = async (e)=>{
  //     e.preventDefault();
      
      
  // }
  return (
    <div className='flex justify-center items-center '>
        <form  onSubmit={handleSubmit} className='flex flex-col mb-10  p-5 gap-3 border drop-shadow-lg mt-10 rounded-lg w-2/5 '>
            <h1 className='text-center font-bold text-3xl mb-5'>Sign Up</h1>
            <label className='font-bold text-gray-500'>Name</label>
            <input className='border p-2 focus:outline-none w-5/5' value={values.name} placeholder='Name' minLength="5" name='name' 
             onChange={handleChange}
             onBlur={handleBlur}
             required 
             />
             {errors.name && touched.name? 
            <p className=''>{errors.name}</p>:null}
            <label className='font-bold text-gray-500'>Email</label>
            <input className='border p-2 focus:outline-none w-5/5' value={values.email} type='email' placeholder='Name' name='email'
            onChange={handleChange}
            onBlur = {handleBlur}
            required/>
            {errors.email && touched.email? 
            <p className=''>{errors.email}</p>:null}
            <label className='font-bold text-gray-500'>Password</label>
            <input className='border p-2 focus:outline-none w-5/5' type="password" value={values.password} placeholder='Name' name='password' 
            onChange={handleChange}
            onBlur = {handleBlur}
            required />
            {errors.password && touched.password? 
            <p className=''>{errors.password}</p>:null}

            <p className='text-center  font-thin mt-5'>Already member?<NavLink to='/login' className=''> Login</NavLink></p>
            
            <button  className='flex px-4 py-2 border mb-10 w-1/5 rounded-lg text-white font-bold bg-blue-600'>Sign up</button>
        </form>

    </div>
  )
}
