import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function Dashboard(){
  const { user, logout } = useContext(AuthContext)
  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <p className="mt-2">Welcome, {user?.name}</p>
      <button className="mt-4 bg-red-600 text-white px-3 py-1 rounded" onClick={logout}>Logout</button>
    </div>
  )
}
