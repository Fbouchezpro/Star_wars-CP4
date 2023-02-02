import axios from "axios";
import { useState } from "react";
import "./style.scss";

export default function ScriptForm() {
  const [newScript, setNewScript] = useState({
    title: "",
    minplayer: 0,
    maxplayer: 0,
    story: "",
    planets_id: 0,
  });
  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        return;
      default:
        newValue = value;
    }
    setNewScript({ ...newScript, [name]: newValue });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/scripts`, newScript)
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="Sform">
      <div className="Stitle">
        <p>Your wrote a Script?Send him to the empire!</p>
      </div>
      <form className="formclass" onSubmit={hSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={hChange}
          value={newScript.title}
        />
        <div className="playeroption">
          <select
            className="Sminp"
            name="minplayer"
            onChange={hChange}
            value={newScript.minplayer}
          >
            <option value="---">Min Player</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select
            className="Smaxp"
            name="maxplayer"
            onChange={hChange}
            value={newScript.maxplayer}
          >
            <option value="---">Max Player</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select
            className="Splanet"
            name="planets_id"
            onChange={hChange}
            value={newScript.planets_id}
          >
            <option value="---">Planet</option>
            <option value="2">Coruscant</option>
            <option value="3">Tatooine</option>
            <option value="4">Endor</option>
            <option value="5">Tython</option>
            <option value="6">Dagobah</option>
            <option value="7">Mandalore</option>
            <option value="8">Bespin</option>
          </select>
        </div>
        <textarea
          name="story"
          rows="20"
          cols="50"
          onChange={hChange}
          value={newScript.story}
          placeholder="Your'story begin here
        "
        />
        <button type="submit">Submit your story</button>
      </form>
    </div>
  );
}
