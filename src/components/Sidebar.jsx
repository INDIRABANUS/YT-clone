import {
  MdHome,
  MdWhatshot,
  MdSubscriptions,
  MdVideoLibrary,
  MdSportsEsports,
  MdMusicNote,
} from "react-icons/md";

export default function Sidebar({ isOpen, onCategory }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => onCategory("All")}><MdHome /> Home</li>
        <li onClick={() => onCategory("Trending")}><MdWhatshot /> Trending</li>
        <li onClick={() => onCategory("Education")}><MdVideoLibrary /> Education</li>
        <li onClick={() => onCategory("Gaming")}><MdSportsEsports /> Gaming</li>
        <li onClick={() => onCategory("Music")}><MdMusicNote /> Music</li>
        <li onClick={() => onCategory("Subscriptions")}><MdSubscriptions /> Subscriptions</li>      
      </ul>
    </div>
  );
}
