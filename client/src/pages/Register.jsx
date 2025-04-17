import React from 'react'
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <p className='title'>Registrarse</p>
      <form className='App' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("firstName")} />
        <input type='text' {...register("lastName")} />
        <input type='email' {...register("email", {required: true})} />
        {errors.email && <span style={{color: "red"}}>Email is required</span>}
        <input type="text" {...register("telephone")} />
        <input type="password" {...register("password")}/>
        <input type={"submit"} style={{backgroundColor: "#a1eafb"}} />
      </form>
    </>
  )
}

export default Register;
