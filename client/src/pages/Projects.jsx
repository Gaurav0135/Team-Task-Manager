import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { getProjects } from '../services/projectService'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Navbar />
        <h1 className="text-2xl mb-4">Projects</h1>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p._id} className="p-4 bg-white rounded shadow">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
