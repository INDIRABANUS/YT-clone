import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles.css";

export default function UserPage() {
  const [category, setCategory] = useState("Home");

  const videos = [
    {
      id: 1,
      title: "React JS Tutorial",
      cat: "Home",
      url: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      id: 2,
      title: "Best Action Movies",
      cat: "Movies",
      url: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 3,
      title: "Top Music Hits",
      cat: "Music",
      url: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 4,
      title: "NBA Highlights",
      cat: "Sports",
      url: "https://www.youtube.com/embed/3SLR0eWs2co",
    },
    {
      id: 5,
      title: "GTA V Gameplay",
      cat: "Gaming",
      url: "https://www.youtube.com/embed/QkkoHAzjnUs",
    },
  ];

  const filteredVideos = category === "Home"
    ? videos
    : videos.filter((v) => v.cat === category);

  return (
    <div>
      <Navbar />

      <div className="user-layout">
        <Sidebar onCategorySelect={setCategory} />

        <div className="content">
          <h2>{category} Videos</h2>

          <div className="video-grid">
            {filteredVideos.map((v) => (
              <div className="video-card" key={v.id}>
                <iframe
                  src={v.url}
                  title={v.title}
                  allowFullScreen
                ></iframe>
                <h3>{v.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
