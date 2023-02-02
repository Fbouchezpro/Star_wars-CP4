import CardScript from "@components/CardScript";
import Logo from "@components/logo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Home() {
  const [scripts, setScripts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/scripts`)
      .then(({ data }) => {
        setScripts(data);
      });
  }, []);
  return (
    <>
      <Logo />
      <div className="Hheader">
        <p>Last Script Publish</p>
      </div>
      <div className="scriptList">
        {scripts.map((element) => {
          return (
            <Link to={`/dscript/${element.id}`} key={element.id}>
              <CardScript key={element.id} data={element} />
            </Link>
          );
        })}
      </div>

      <div className="Hbutton">
        <Link to="/submit">
          <button type="button">+</button>
        </Link>
      </div>
    </>
  );
}
