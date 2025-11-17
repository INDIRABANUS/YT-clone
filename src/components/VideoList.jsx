import React from 'react'
import VideoCard from './VideoCard'

export default function VideoList({ videos }) {
  return (
    <div className="video-list">
      {videos.map(v => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  )
}
