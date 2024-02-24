import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [Registration,setregistration] = useState(false)
  const Submit=()=>{
    setregistration(true)
  }
  return (
    <div className="App">
      <form onClick={handleSubmit(Submit)}>
      {Registration && <p className='Registration'>Registration Successful</p>}
        <input type="text" className='inputBox' placeholder='First Name' {...register("FirstName", {required: "First Name is Required"})}/>
        {errors.FirstName && <p className='error'>{errors.FirstName.message}</p>}
        <input type="text" className='inputBox' placeholder='Last Name' {...register("LastName", {required: "Last Name is Required"})}/>
        {errors.LastName && <p className='error'>{errors.LastName.message}</p>}
        <input type="text" className='inputBox' placeholder='Email' {...register('Email', {required: 'Email is required',pattern: {value: /\S+@\S+\.\S+/,message:'Invalid email address'}})}/>
        {errors.Email && <p className='error'>{errors.Email.message}</p>}
        <input type="number" className='inputBox' placeholder='Phone Number' {...register("PhoneNumber", {required: "Phone Number is Required", pattern: {value: /^[0-9]{10}$/, message: 'Invalid Phone Number'}})}/>
        {errors.PhoneNumber && <p className='error'>{errors.PhoneNumber.message}</p>}
        <button type='submit' className='regButton'>Register</button>
        <br />
      </form>
    </div>
  )
}

export default App