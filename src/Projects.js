
import axios from 'axios';
import RegistrationApi from './RegistrationApi';
import React, { useEffect, useState } from 'react';
import { Routes, Route , Link} from "react-router-dom";

const Projects = () => {
    const [data, setData] = useState([]);

  const token = '0d4d78d0f8fe62597aa5933c2e243faf5a804dbe';
  // const token = 'fa9f50add93ff853e552fec202e44502ae0fbb12';

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    axios.get('http://127.0.0.1:8000/project/')
    // axios.get('http://13.234.216.30:8585/project/')
      .then((response) => {
        setData(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 
  return (
    
    <div className='container'>
    <h1>Project Listing</h1>
    
          <table className="table table-bordered">
          <thead className="bg-info">
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>request_type</th>
              <th>user</th>
              <th>assign_to</th>
              <th>loomlinks</th>
              <th>no_of_pages</th>
              <th>start_date</th>
              <th>due_date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.request_type}</td>
              <td>{item.user}</td>
              <td>{item.assign_to}</td>
              <td>{item.loomlinks}</td>
              <td>{item.no_of_pages}</td>
              <td>{item.start_date}</td>
              <td>{item.due_date}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>
                      <button className="btn btn-info">
                        <Link to={`projectedit/${item.id}`}>Edit</Link>
                      </button>
              </td>
              
            </tr>

            
          ))}   
          </tbody>
        </table>
    </div>
  )
}

export default Projects
