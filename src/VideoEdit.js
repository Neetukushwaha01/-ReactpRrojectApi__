// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const VideoEdit = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/video/${id}`);
//         setVideo(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchVideo();
//   }, [id]);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://127.0.0.1:8000/video/${id}/`, video, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Update successful');
//     } catch (error) {
//       console.log(error);
//       setError('Failed to update Video');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVideo((prevVideo) => ({
//       ...prevVideo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate();
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <div className="col-md-4 m-auto">
//         <h1 className="mt-4">Video Edit</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Project Title:</label>
//             <input
//               type="text"
//               name="project_title"
//               className="form-control"
//               value={video.project_title}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Type Request:</label>
//             <input
//               type="text"
//               name="type_request"
//               className="form-control"
//               value={video.type_request}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Project Description:</label>
//             <input
//               type="text"
//               name="project_description"
//               className="form-control"
//               value={video.project_description}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Loomlinks:</label>
//             <input
//               type="link"
//               name="loomlinks"
//               className="form-control"
//               value={video.loomlinks}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>User:</label>
//             <input
//               type="text"
//               name="user"
//               className="form-control"
//               value={video.user}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Assign To:</label>
//             <input
//               type="text"
//               name="assign_to"
//               className="form-control"
//               value={video.assign_to}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <button className="btn btn-info" type="submit">
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VideoEdit;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoEdit = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/video/${id}`);
        setVideo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/video/${id}/`, video, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Update successful');
    } catch (error) {
      console.log(error);
      setError('Failed to update video');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({
      ...prevVideo,
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
        <h1 className="mt-4">Video Edit</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Video Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={video.project_title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
              <label>Types Request:</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={video.type_request}
                onChange={handleChange}
              />
         </div>
          <div className="form-group">
            <label>Video Description:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={video.project_description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Loomlink:</label>
            <input
              type="text"
              name="url"
              className="form-control"
              value={video.loomlinks}
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

export default VideoEdit;


