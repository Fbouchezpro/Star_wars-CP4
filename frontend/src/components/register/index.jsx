import "./style.scss";

export default function Register() {
  return (
    <div className="registerform">
      <form className="formclass">
        <h1>Who want to enroll?</h1>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="confPass" placeholder="username" />
        <button type="button">We want you in ou new empire!</button>
      </form>
    </div>
  );
}
