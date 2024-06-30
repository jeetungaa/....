import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(loginUser);

      const res = await axios.post('/api/auth', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          required
        />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;