import appContext from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const { username, setUsername, password, setPassword } = useContext(appContext);

  /* const handleChange = ({target}) => {
    if (target.name === "username") setUsername(target.value);
    else setPassword(target.value)
  } */

  return (
   <div className="w-full h-screen bg-black flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Texto te teste tela login</h1>
   </div>
  );
}

export default Login;