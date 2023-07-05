import React from 'react'
import "./Login.css";

import { useForm } from 'react-hook-form';


 const Login=()=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
            

                <form id='form' className='flex flex-col' onSubmit={handleSubmit()}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src="https://www.theknot.com/tk-media/images/8f111626-128e-49a9-921a-c9fd21551435~rs_768.h" alt="" />
            </div>
        </div>
    </section>
  )
}
export default Login 