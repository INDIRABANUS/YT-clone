import "../styles.css";
import {
  MdHome,
  MdOutlineSportsBasketball,
  MdSubscriptions,
} from "react-icons/md";
import { FaMusic, FaFilm, FaGamepad } from "react-icons/fa";

export default function Sidebar({ onCategorySelect }) {
  return (
    <div className="sidebar">
      <div className="side-item" onClick={() => onCategorySelect("Home")}>
        <MdHome /> Home
      </div>

      <div className="side-item" onClick={() => onCategorySelect("Movies")}>
        <FaFilm /> Movies
      </div>

      <div className="side-item" onClick={() => onCategorySelect("Music")}>
        <FaMusic /> Music
      </div>

      <div className="side-item" onClick={() => onCategorySelect("Sports")}>
        <MdOutlineSportsBasketball /> Sports
      </div>

      <div className="side-item" onClick={() => onCategorySelect("Gaming")}>
        <FaGamepad /> Gaming
      </div>

      <div className="side-item" onClick={() => onCategorySelect("Subscriptions")}>
        <MdSubscriptions /> Subscriptions
      </div>
    </div>
  );
}
