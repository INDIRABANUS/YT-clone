import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import VideoList from '../components/VideoList'

export default function Home() {
  const [search, setSearch] = useState('')

  const videos = [
    { id: 1, title: 'React Tutorial for Beginners', channel: 'CodeWithMe', thumbnail: '', src: 'https://www.youtube.com/embed/Ke90Tje7VS0' },
    { id: 2, title: 'Learn JavaScript in 1 Hour', channel: 'TechBro', thumbnail: '', src: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
    { id: 3, title: 'Build a Todo App', channel: 'DevSimplify', thumbnail: '', src: 'https://www.youtube.com/embed/E1E08i2UJGI' }
  ]

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Navbar onSearch={setSearch} />
      <VideoList videos={filtered} />
    </div>
  )
}
