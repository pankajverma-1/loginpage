import React, { useState } from 'react';
import validator from 'validator';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!validator.isEmail(email)) {
      alert('Email not valid');
      return;
    }
    try {
      const { data, status } = await Axios.post('/api/users/login', {
        email,
        password,
      });

      if (data.error) {
        alert(data.error);
        return;
      }
      if (status === 200) {
        alert(`welcome mr. ${data.name} your login successful`);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="w-100 min-vh-100 text-white d-flex flex-column justify-content-center align-items-sm-center p-2"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="h1">Login here</div>
      <div className="d-flex flex-column mt-3">
        <div className="mb-3 formField">
          <label htmlFor="email" className="form-label">
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-3 formField">
          <label htmlFor="password" className="form-label">
            Enter password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="btn btn-primary" onClick={submitHandler}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default Login;
