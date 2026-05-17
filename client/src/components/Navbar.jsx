import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <div className="flex items-center justify-between mb-4">
      <div />
      <div className="flex items-center gap-4">
        {user && <span>{user.name} ({user.role})</span>}
        <button onClick={logout} className="text-sm text-red-600">Logout</button>
      </div>
    </div>
  )
}
