import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    try {
      await login({ email, password })
      nav('/')
    } catch (err) {
      alert(err.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handle} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="w-full p-2 mb-2 border" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  )
}
