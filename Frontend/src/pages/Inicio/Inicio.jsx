import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from '../../components/Countdown/Countdown'
import "./Inicio.css"

const Inicio = () => {
  return (
    <div className='container'>
      <div className="text-center py-4 font-amiri">
        <h1 className='text-uppercase'>Coscu Army Awards</h1>
        <h4 className='text-uppercase'>Los premios más picantes</h4>
      </div>

      <div className="text-center py-4 ">
        <div className="contador text-white">
          <Countdown />
        </div>
      </div>

      <div className="text-center py-4 ">
        <h3 className='pb-2'>Reviví todas las entregas anteriores</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2 font-amiri">
          <Link to="/2018" className="card me-2 text-decoration-none">
            <div className="card-body card-año">
              <h3>2018</h3>
            </div>
          </Link>

          <Link to="/2019" className="card me-2 text-decoration-none">
            <div className="card-body card-año card-año-2019">
              <h3>2019</h3>
            </div>
          </Link>

          <Link to="/2020" className="card me-2 text-decoration-none">
            <div className="card-body card-año card-año-2020">
              <h3>2020</h3>
            </div>
          </Link>

          <Link to="/2021" className="card text-decoration-none">
            <div className="card-body card-año card-año-2021">
              <h3>2021</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Inicio