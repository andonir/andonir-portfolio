import { useContext } from "react";
import { Context } from "../context/context1";
import "../styles/Login.css";

const Login = () => {
  const { key, setUserKey } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserKey(parseInt(e.target[0].value), 10);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Introduce el código" />
        <input type="submit" value="ACCEDER"/>
      </form>
    </div>
  );
};

export default Login;
