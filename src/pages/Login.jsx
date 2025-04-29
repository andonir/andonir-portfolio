import { useContext } from "react";
import { Context } from "../context/context1";
import "../styles/Login.css";

const Login = () => {
  const { key, setUserKey } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserKey(e.target[0].value);
  };
  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Introduce the key"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default Login;
