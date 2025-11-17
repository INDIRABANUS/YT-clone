import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Watch() {
  const { id } = useParams()

  const videos = [
    { id: 1, title: 'React', channel: 'CodeWithMe', src: '' },
    { id: 2, title: 'JavaScript in 1 Hour', channel: 'TechBro', src: '' },
    { id: 3, title: 'Build a Todo App', channel: 'DevSimplify', src: '' }
  ]

  const video = videos.find(v => v.id === Number(id))

  return (
    <div className="watch-container">
      <Link to="/" className="back-btn">← Back</Link>

      {video ? (
        <>
          <h2>{video.title}</h2>

          <iframe
            width="80%"
            height="400"
            src={video.src}
            title={video.title}
            allowFullScreen
            className="player"
          ></iframe>

          <p>Channel: {video.channel}</p>
        </>
      ) : (
        <h3>Video not found!</h3>
      )}
    </div>
  )
}
