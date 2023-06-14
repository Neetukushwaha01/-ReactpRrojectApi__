import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [msg,setMsg]=useState("");
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://127.0.0.1:8000/login/',data)
      .then((response) => {
        console.log(response.data);
        console.log("login successfully");


      })
      .catch((error) => {
        console.log(error);
        console.log("error wala");
        setMsg("Invalid Email or Password")
        

      });
  }
  

  
     
    

  

  return (
    <div className="container">
    <div className="col-md-4 m-auto">
      <h1 className="mt-4">Login Form</h1>
      <h2 className="text-danger">{msg}</h2>
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
        
        <button type="submit" className="btn btn-info">
          Login
        </button>

        <br/>
      Don't have Account <Link to="/register">Register </Link> here
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
