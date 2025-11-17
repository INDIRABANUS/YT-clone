import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function UserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "user";
  const username = email.split("@")[0];

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const videos = [
    { id: 1, title: "React Tutorial", category: "Education", url: "https://www.youtube.com/embed/w7ejDZ8SWv8" },
    { id: 2, title: "JavaScript Basics", category: "Education", url: "https://www.youtube.com/embed/PkZNo7MFNFg" },
    { id: 3, title: "CSS Full Course", category: "Education", url: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
    { id: 4, title: "Gaming Montage", category: "Gaming", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Top 10 Goals", category: "Sports", url: "https://www.youtube.com/embed/y6120QOlsfU" },
    { id: 6, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 7, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 8, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 9, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 10, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 11, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 12, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 13, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"},
    { id: 14, title: "New Music Video", category: "Music", url: "https://www.youtube.com/embed/w7ejDZ8SWv8"}
  ];

  const filteredVideos = videos.filter(video => {
    const matchSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || video.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  function logout() {
    navigate("/");
  }

  return (
    <div className="user-container">
      <Navbar
        name={username}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onLogout={logout}
        onSearch={setSearchTerm}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onCategory={(cat) => setSelectedCategory(cat)}
      />

      <div className={`video-container ${sidebarOpen ? "shift" : ""}`}>
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              src={video.url}
              allowFullScreen
              title={video.title}
            ></iframe>
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
