import React, { useEffect, useState } from 'react'
import api from '../services/api'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0, overdue: 0 })

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/tasks')
        const tasks = res.data || res
        const total = tasks.length
        const completed = tasks.filter((t) => t.status === 'Completed').length
        const pending = tasks.filter((t) => t.status !== 'Completed').length
        const overdue = tasks.filter((t) => t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'Completed').length
        setStats({ total, completed, pending, overdue })
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Navbar />
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow">Total Tasks: {stats.total}</div>
          <div className="p-4 bg-white rounded shadow">Completed: {stats.completed}</div>
          <div className="p-4 bg-white rounded shadow">Pending: {stats.pending}</div>
          <div className="p-4 bg-white rounded shadow">Overdue: {stats.overdue}</div>
        </div>
      </div>
    </div>
  )
}
