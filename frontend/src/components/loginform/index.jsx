import { Link } from "react-router-dom";
import "./style.scss";

export default function LoginForm() {
  return (
    <div className="login">
      <form className="loginForm">
        <label className="inputLoginForm">
          <h1 className="loginTitle">Welcome to our new Empire</h1>
          <input
            className="inputLogin"
            type="text"
            name="email"
            v
            placeholder="Email"
          />
          <br />
          <br />
          <input
            className="inputLogin"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <Link to="/home">
          <button type="button" className="loginSubmit">
            Connect
          </button>
        </Link>
        <br />
        <a href="/register">Enroll Now!</a>
      </form>
    </div>
  );
}
