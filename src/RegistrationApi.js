import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://127.0.0.1:8000/registration/',data)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  
     
    

  

  return (
    <div className="container">
      <h1 className="mt-4">Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
            
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password")}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="full_name"
            {...register("full_name")}
            
            
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      <br/>
      Already Account <Link to="/login">Login </Link> here
    </div>
  );
};

export default RegistrationForm;
