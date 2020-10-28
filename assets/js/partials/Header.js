import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

const Header = () => (
  <header>
    <div className="container header">
      <NavLink to="/">
        <img src={logo} alt="Intromeet" className="header__brand"/>
      </NavLink>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink exact to="/" className="header__link" activeClassName="header__link--active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="header__link" activeClassName="header__link--active">
              Użytkownicy
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="header__link" activeClassName="header__link--active">
              O Portalu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="header__link" activeClassName="header__link--active">
              Kontakt
            </NavLink>
          </li>
          <li className="header__button header__button--first">
            <NavLink to="/login" className="button button--border">
              Logowanie
            </NavLink>
          </li>
          <li className="header__button">
            <NavLink to="/register" className="button">
              Rejestracja
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header