import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { getTasks, updateTask } from '../services/taskService'

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const res = await getTasks()
    setTasks(res)
  }

  const handleStatus = async (id, status) => {
    await updateTask(id, { status })
    load()
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Navbar />
        <h1 className="text-2xl mb-4">Tasks</h1>
        <div className="space-y-2">
          {tasks.map((t) => (
            <div key={t._id} className="p-4 bg-white rounded shadow flex justify-between">
              <div>
                <h3 className="font-bold">{t.title}</h3>
                <p className="text-sm">{t.description}</p>
              </div>
              <div>
                <select value={t.status} onChange={(e) => handleStatus(t._id, e.target.value)} className="border p-1">
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
