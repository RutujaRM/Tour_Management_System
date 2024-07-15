import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    image:undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      console.log("Suceesfull")
      console.log(JSON.stringify(credentials))
      console.log(BASE_URL)

      const res = await fetch(`${BASE_URL}/auth/register`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(credentials)

        });


      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: 'REGISTER_SUCCESS' })
      navigate('/login')
    }
    catch (err) {
      alert(err.message)

    }
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={registerImg} alt="Image not found" />
                </div>

                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="Image Not found" />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleClick} >
                    <FormGroup>
                      <input type="text" name="" id="username" placeholder='Username' onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <input type="email" name="" id="email" placeholder='Email' onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <input type="password" name="" id="password" placeholder='Password' onChange={handleChange} required />
                    </FormGroup>

                    <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>

                  </Form>
                  <p>Already have an account? 🙂 <Link to='/login' >Login</Link> </p>
                </div>
              </div>
            </Col>
          </Row>

        </Container>

      </section>


    </>

  )
}
export default Register





//*********** Using image  */

// import React, { useState, useContext } from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import registerImg from '../assets/images/register.png';
// import userIcon from '../assets/images/user.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Assuming axios is used for HTTP requests
// import { BASE_URL } from '../utils/config'; // Import your BASE_URL
// import { AuthContext } from '../context/AuthContext';

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     email: '',
//     password: '',
//     image: null, // To store selected image file
//   });
//   const [imagePreview, setImagePreview] = useState(null); // To display selected image preview

//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.id === 'image') {
//       setCredentials({ ...credentials, image: e.target.files[0] });
//       setImagePreview(URL.createObjectURL(e.target.files[0])); // Create image preview URL
//     } else {
//       setCredentials({ ...credentials, [e.target.id]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('username', credentials.username);
//       formData.append('email', credentials.email);
//       formData.append('password', credentials.password);
//       formData.append('image', credentials.image);

//       const res = await axios.post(`${BASE_URL}/auth/register`, formData);
//       console.log('Response:', res.data);
//       alert('Registration successful!'); // Handle success scenario
//       navigate('/login'); // Redirect to login page upon successful registration
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert('Registration failed! Please try again.'); // Handle error scenario
//     }
//   };

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg='8' className='m-auto'>
//             <div className="login__container d-flex justify-content-between">
//               <div className="login__img">
//                 <img src={registerImg} alt="Register" />
//               </div>

//               <div className="login__form">
//                 <div className="user">
//                   <img src={userIcon} alt="User Icon" />
//                 </div>
//                 <h2>Register</h2>

//                 <Form onSubmit={handleSubmit}>
//                   <FormGroup>
//                     <input type="text" id="username" placeholder='Username' onChange={handleChange} required />
//                   </FormGroup>

//                   <FormGroup>
//                     <input type="email" id="email" placeholder='Email' onChange={handleChange} required />
//                   </FormGroup>

//                   <FormGroup>
//                     <input type="password" id="password" placeholder='Password' onChange={handleChange} required />
//                   </FormGroup>

//                   <FormGroup>
//                     <input type="file" id="image" onChange={handleChange} accept="image/*" required />
//                     {imagePreview && <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '100px', marginTop: '10px' }} />}
//                   </FormGroup>

//                   <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
//                 </Form>

//                 <p>Already have an account? <Link to='/login'>Login</Link></p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils/config';

// const Register = () => {
//   const [user, setUser] = useState({
//     username: '',
//     email: '',
//     password: '',
//     image: null, // To store selected image file
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     if (e.target.id === 'image') {
//       setUser({ ...user, image: e.target.files[0] });
//     } else {
//       setUser({ ...user, [e.target.id]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('username', user.username);
//       formData.append('email', user.email);
//       formData.append('password', user.password);
//       formData.append('image', user.image);

//       const res = await axios.post(`${BASE_URL}/auth/register`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Response:', res.data);
//       alert('Registration successful!'); // Example of handling success
//       // Redirect or perform other actions upon successful registration
//     } catch (error) {
//       console.error('Error:', error.message);
//       setErrorMessage('Registration failed! Please try again.'); // Set error message state
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {errorMessage && <p>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>Username:</label>
//         <input type="text" id="username" onChange={handleChange} value={user.username} required />
//         <br />

//         <label>Email:</label>
//         <input type="email" id="email" onChange={handleChange} value={user.email} required />
//         <br />

//         <label>Password:</label>
//         <input type="password" id="password" onChange={handleChange} value={user.password} required />
//         <br />

//         <label>Upload Image:</label>
//         <input type="file" id="image" onChange={handleChange} accept="image/*" required />
//         <br />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;









































// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils/config';

// const Register = () => {
//   const [user, setUser] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const res = await axios.post(`${BASE_URL}/auth/register`, user);
//       console.log('Response:', res.data);
//       alert('Registration successful!'); // Example of handling success
//       // Redirect or perform other actions upon successful registration
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert('Registration failed! Please try again.'); // Example of handling error
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username:</label>
//         <input type="text" id="username" onChange={handleChange} value={user.username} required />
//         <br />

//         <label>Email:</label>
//         <input type="email" id="email" onChange={handleChange} value={user.email} required />
//         <br />

//         <label>Password:</label>
//         <input type="password" id="password" onChange={handleChange} value={user.password} required />
//         <br />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
