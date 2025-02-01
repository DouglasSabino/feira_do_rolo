import appContext from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Axios from 'axios';

function Login() {
  const { username, setUsername, password, setPassword } = useContext(appContext);
  const history = useNavigate();

  const handleChange = ({target}) => {
    if (target.name === "username") setUsername(target.value);
    else setPassword(target.value)
  }

  const clickLogin = () => {
    Axios.post('http://localhost:3001', {
      username,
      password
    }).then((resp) => {
      localStorage.setItem('token', resp.data);
      history('/home');
    }).catch((err) => toast.error(err.response.data));
  }
  
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-[#292114]">
      <div className='px-8 py-6'>
      <img src='./assets/logo_feiradorolo.png' alt='logo Feira do Rolo' className="mx-auto  mt-8 w-[36rem]" />
        <input
          name='username'
          className='w-full mb-4 px-4 py-2 rounded-md text-center font-bold'
          type="text"
          placeholder='Username'
          onChange={handleChange}
        />
        <input
          name='password'
          className='w-full mb-4 px-4 py-2 rounded-md text-center font-bold'
          type="password"
          placeholder='Password'
          onChange={handleChange}
        />
        <button
          onClick={clickLogin}
          className="w-full px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;