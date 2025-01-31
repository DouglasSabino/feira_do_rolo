import appContext from '../context/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const { username, setUsername, password, setPassword } = useContext(appContext);

  const handleChange = ({target}) => {
    if (target.name === "username") setUsername(target.value);
    else setPassword(target.value)
  }

  return (
    <div>Login :S</div>
  );
}

export default Login;