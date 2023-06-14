import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectEdit = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/project/${id}`);
        setProject(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/project/${id}/`, project, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Update successful');
    } catch (error) {
      console.log(error);
      setError('Failed to update project');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="col-md-4 m-auto">
        <h1 className="mt-4">Project Edit</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={project.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Type Request:</label>
            <input
              type="text"
              name="type_request"
              className="form-control"
              value={project.request_type}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Project Description:</label>
            <input
              type="text"
              name="project_description"
              className="form-control"
              value={project.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Loomlinks:</label>
            <input
              type="text"
              name="loomlinks"
              className="form-control"
              value={project.loomlinks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>User:</label>
            <input
              type="text"
              name="user"
              className="form-control"
              value={project.user}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Assign To:</label>
            <input
              type="text"
              name="assign_to"
              className="form-control"
              value={project.assign_to}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-info" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectEdit
