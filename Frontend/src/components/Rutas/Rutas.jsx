import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Inicio from '../../pages/Inicio/Inicio'
import Participantes from '../../pages/Participantes/Participantes'
import Año2018 from '../../pages/Años/año2018'
import Año2019 from '../../pages/Años/año2019'
import Año2020 from '../../pages/Años/año2020'
import Año2021 from '../../pages/Años/año2021'
import Perfil from '../../pages/Perfil/Perfil'

const Rutas = () => {
  return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route path="/Participantes" element={<Participantes />} />
                <Route path="/Participantes/:id" element={<Perfil />} />
                <Route path='/2018' element={<Año2018 />} />
                <Route path='/2019' element={<Año2019 />} />
                <Route path='/2020' element={<Año2020 />} />
                <Route path='/2021' element={<Año2021 />} />
            </Routes>
        </Router>
  )
}

export default Rutas