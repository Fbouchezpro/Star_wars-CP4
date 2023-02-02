import PropTypes from "prop-types";
import "./style.scss";

export default function CardScript({ data }) {
  return (
    <div className="Scard">
      <div className="Stitle">
        <h4>{data.title}</h4>
      </div>
      <br />
      <div className="Sinfo">
        <p>👤Min P:{data.minplayer}</p>
        <p>👥Max P:{data.maxplayer}</p>
        <p>🪐Planet:{data.planets_id}</p>
      </div>
    </div>
  );
}

CardScript.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    minplayer: PropTypes.number.isRequired,
    maxplayer: PropTypes.number.isRequired,
    planets_id: PropTypes.number.isRequired,
  }).isRequired,
};
