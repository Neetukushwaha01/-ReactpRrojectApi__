import axios from 'axios';
import RegistrationApi from './RegistrationApi';
import Projects from './Projects';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import User from './Video';
import VideoEdit from './VideoEdit';

import ProjectEdit from './ProjectEdit';


function App() {
 
  
  
  return (
  
    <Routes>
        <Route exact path="/register" element={<RegistrationApi />}/>
        <Route exact path="/login" element={<LoginForm />}/>
        <Route exact path="/Videos" element={<User />}/>
        <Route path="/video/edit/:id" element={<VideoEdit />} />
        <Route path="/" element={<Projects />} />
        <Route path="/projectedit/:id" element={<ProjectEdit />} />

      
       
   
      
      </Routes>
      
    
   
   
  

  
 
 
   
  );
}


export default App;

