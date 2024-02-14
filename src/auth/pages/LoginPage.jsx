import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    console.log(lastPath);

    login('Camilo Ossa');
    navigate(lastPath, { replace: true });
  }

  return (
    <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button className="btn btn-info btn-lg px-5" onClick={ onLogin }>Login</button>
    </div>
  )
}

export { LoginPage }
