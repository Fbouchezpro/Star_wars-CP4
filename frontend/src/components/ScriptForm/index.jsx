import "./style.scss";

export default function ScriptForm() {
  return (
    <div className="Sform">
      <div className="Stitle">
        <p>Your wrote a Script?Send him to the empire!</p>
      </div>
      <form className="formclass">
        <input type="text" name="Title" placeholder="Title" />
        <div className="playeroption">
          <select className="Sminp">
            <option value="---">Min Player</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select className="Smaxp">
            <option value="---">Max Player</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <select className="Splanet">
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
          name="Stext"
          rows="20"
          cols="50"
          placeholder="Your'story begin here
        "
        />
        <button type="button">Submit your story</button>
      </form>
    </div>
  );
}
