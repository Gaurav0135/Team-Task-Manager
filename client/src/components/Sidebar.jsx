import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r min-h-screen p-4">
      <h2 className="font-bold mb-4">Team Task Manager</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </aside>
  )
}
