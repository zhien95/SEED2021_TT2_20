import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
    <center>
      <h1>Error Page</h1>
      <Link to='/' className='btn'>
        Back Home
      </Link>
      </center>
    </div>
    
  );
};

export default Error;
