import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault();


    dispatch({ type: 'LOGIN_START' })

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,
        {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(credentials),

        });

        const result = await res.json()
        if(!res.ok) alert(result.message)
     
          console.log(result.data);

       dispatch ({type:'LOGIN_SUCCESS' , payload:result.data})  
       navigate('/') 
    } catch (err) {
      dispatch ({type:'LOGIN_FAILURE' , payload:err.message})  
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
                  <img src={loginImg} alt="Image not found" />
                </div>

                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="Image Not found" />
                  </div>
                  <h2>Login</h2>

                  <Form onSubmit={handleClick} >
                    <FormGroup>
                      <input type="email" name="" id="email" placeholder='Email' onChange={handleChange} required />
                    </FormGroup>

                    <FormGroup>
                      <input type="password" name="" id="password" placeholder='Password' onChange={handleChange} required />
                    </FormGroup>

                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>

                  </Form>
                  <p>Don't have an account? 😉 <Link to='/register' >Create Account</Link> </p>
                </div>
              </div>
            </Col>
          </Row>

        </Container>

      </section>


    </>

  )
}

export default Login