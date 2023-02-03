import * as yup from 'yup'

export const signupSchema = yup.object({
    name: yup.string().min(2).max(25).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmpasswrod: yup.string().min(6).oneOf([yup.ref('password'),null],"Password must matche") 


})

export const loginSchema = yup.object({
    email:yup.string().email().required(),
    password:yup.string().min(6).required()
})