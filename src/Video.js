
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import VideoEdit from './VideoEdit';

const Videos = () => {
  const [data, setData] = useState([]);

  const token = '4525051e90c1cb6ed48b2d5df00ff1fbb2c7eb90';

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get('http://127.0.0.1:8000/video/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="bg-info">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Request Type</th>
            <th>User</th>
            <th>Assign To</th>
            <th>Loom Links</th>
            <th>Description</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.project_title}</td>
              <td>{item.type_request}</td>
              <td>{item.user}</td>
              <td>{item.assign_to}</td>
              <td>{item.loomlinks}</td>
              <td>{item.project_description}</td>
              <td>
                <button className="btn btn-info">
                <Link to={`/video/edit/${item.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      // <Routes>
      //   <Route path="/edit/:id" element={<VideoEdit />} />
      // </Routes>
    </div>
  );
};

export default Videos;
