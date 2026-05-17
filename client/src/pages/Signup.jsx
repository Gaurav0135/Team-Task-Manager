import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register as registerService } from '../services/authService'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    try {
      await registerService({ name, email, password })
      nav('/login')
    } catch (err) {
      alert(err.message || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handle} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl mb-4">Sign Up</h2>
        <input className="w-full p-2 mb-2 border" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 mb-2 border" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-green-600 text-white p-2">Sign Up</button>
      </form>
    </div>
  )
}
