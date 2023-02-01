import logo from "/home/bouchez/Star_wars-CP4/frontend/src/assets/logo.jpeg";
import "./style.scss";

export default function Logo() {
  return (
    <div className="logo">
      <h1>
        Star Wars Edge Of The Empire
        <br />
        HomeMade Script
      </h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
