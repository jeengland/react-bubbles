import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({username: '', password: ''});
  const [error, setError] = useState('');
  const history = useHistory();
  const handleChange = (event) => {
    setLogin({
        ...login,
        [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
        .post('/api/login', login)
        .then((response) => {
            localStorage.setItem('token', response.data.payload);
            setError('');
            history.push('/squares');
        })
        .catch((error) => setError(error.response.data.error));
    setLogin({username: '', password: ''});
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username:&nbsp;
            <input type='text' id='username' name='username' value={login.username} onChange={handleChange}/>
        </label>
        <label htmlFor='password'>password:
            <input type='password' id='password' name='password' value={login.password} onChange={handleChange}/>
        </label>
        <div className='button-row'>
            <button type='submit'>Login</button>
        </div>
        {error ? <p className='error'>{error}</p> : undefined }
    </form>
);
};

export default Login;
