import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">WeatherApp</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal mr-4">
      <Link to='/' className='mr-5'>Home</Link>
      <Link to='/about' className=''>About</Link>
    </ul>
  </div>
</div>
  )
}

export default Navbar