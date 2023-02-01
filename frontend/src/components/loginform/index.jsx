import "./style.scss";

export default function LoginForm() {
  return (
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
        <input
          className="inputLogin"
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button type="submit" className="loginSubmit">
        Connect
      </button>
    </form>
  );
}
