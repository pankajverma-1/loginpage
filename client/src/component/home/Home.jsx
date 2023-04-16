import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="w-100 min-vh-100 text-white d-flex flex-column justify-content-center align-items-sm-center p-2"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="h1 text-uppercase">Welcome to Web page</div>
      <div className="h3 text-uppercase text-light">simple web page</div>
      <div className="p-sm-4">
        <Link to={'/login'}>
          <button type="button" className="btn btn-primary m-1 ">
            Login
          </button>
        </Link>
        <Link to={'/register'}>
          <button type="button" className="btn btn-primary m-1">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
