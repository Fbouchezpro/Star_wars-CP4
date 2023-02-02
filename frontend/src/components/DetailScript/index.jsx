import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function DetailScript() {
  const [dscripts, setDscripts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/scripts/${id}`)
      .then(({ data }) => {
        setDscripts(data);
      });
  }, []);
  return (
    <div className="Dscript">
      <a href="/home">Retour</a>
      <div className="Dtitle">
        <p>{dscripts.title}</p>
      </div>
      <div className="Dinfo">
        <p>👤Min P:{dscripts.minplayer}</p>
        <p>👥Max P:{dscripts.maxplayer}</p>
        <p>🪐Planet:{dscripts.planets_id}</p>
      </div>
      <div className="Dtext">
        <p>{dscripts.story}</p>
      </div>
    </div>
  );
}
