import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    console.log(lastPath);

    login('Camilo Ossa');
    navigate(lastPath, { replace: true });
  }

  return (
    <div className="login contenedor">
      <div className="login__grid">
        <img src="/img/img-login.jpg" className="login__img" alt="Login" />

        <div className="login__acces">
          <h1 className="login__titulo">Login</h1>

          <button className="login__btn" onClick={onLogin}>Login</button>
        </div>
      </div>

    </div>
  )
}

export { LoginPage }
