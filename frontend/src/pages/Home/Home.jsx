import CardScript from "@components/CardScript";
import Logo from "@components/logo";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Home() {
  return (
    <>
      <Logo />
      <div className="Hheader">
        <p>Last Script Publish</p>
      </div>
      <CardScript />
      <div className="Hbutton">
        <Link to="/submit">
          <button type="button">+</button>
        </Link>
      </div>
    </>
  );
}
