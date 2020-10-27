import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav