import React from 'react'
import "./Register.css";

import { useForm } from 'react-hook-form';

const Register=()=> {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()




  return (

       

<section>
    <div className="register">
        <div className="col-1">
            <h2>Register </h2>
            <span>register and enjoy the service</span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit()}>
                <input type="text" {...register("username" , { required : true})} placeholder='username' />
                {errors.username?.type === "required" && "Username is required"}
                <input type="text" {...register("mail" , { required : true}) } placeholder='enter mail' />
                {errors.username?.type === "required" && "email is required"}
                <input type="text" {...register("password")} placeholder='password' />
                <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                {errors.mobile?.type === "required" && "Mobile Number is required"}
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                <input type="file"   placeholder='add your image'/>

                <button className='btn'>Register</button>
            </form>

        </div>
        <div className="col-2">
            <img src="https://www.theknot.com/tk-media/images/8f111626-128e-49a9-921a-c9fd21551435~rs_768.h" alt="" />
        </div>
    </div>
</section>
)


}

export default Register
