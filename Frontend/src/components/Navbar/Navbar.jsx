import React from 'react'
import {Link, NavLink} from "react-router-dom"
import Imagenes from "../Imagenes"
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top ">
      <div className="container-fluid ">
        <Link className="navbar-brand text-uppercase text-warning" to="/"><img className='logo' src={Imagenes.caawardsLogo} alt="logo coscu army awards" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Años
              </a>
              <ul className="dropdown-menu bg-dark">
                <li><NavLink className="dropdown-item bg-dark text-white" to="/2018">2018</NavLink></li>
                <li><NavLink className="dropdown-item bg-dark text-white" to="/2019">2019</NavLink></li>
                <li><NavLink className="dropdown-item bg-dark text-white" to="/2020">2020</NavLink></li>
                <li><NavLink className="dropdown-item bg-dark text-white" to="/2021">2021</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Participantes">Participantes</NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar