import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Imagenes from "../Imagenes"

const Persona = () => {
    const [resultado, setResultado] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [resultadoBusqueda, setResultadoBusqueda] = useState([])

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        personaFilter(e.target.value)
    }

    const personaFilter = (terminoBusqueda) => {
        let results = resultado.filter(persona => persona.usuario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
        console.log("Resultado busqueda", resultadoBusqueda)
        setResultadoBusqueda(results)
    }

    const fetching = async () => {
        let api = `https://railway-caawards-backend-production-a0e2.up.railway.app/api/personas`
        const res = await fetch(api)
        const resultados = await res.json()
        setResultado(resultados)
        setResultadoBusqueda(resultados)
    }
    useEffect(() => {
        fetching()
    }, [])
    return (
        <div className="">
            <div className="d-flex justify-content-center my-4">
                <form className="d-flex col-5" role="search">
                    <input className="form-control me-2" onChange={handleChange} value={busqueda} type="search" placeholder="Buscar..." aria-label="Search" />
                    <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                </form>
            </div>
            <div className='d-flex justify-content-center flex-wrap '>
                {resultadoBusqueda.map(persona => (
                    <div className="card" key={persona._id}>
                        <Link to={`/Participantes/${persona._id}`} className="card-body text-decoration-none">
                            <div className="card-text">
                                <img
                                    src={Imagenes[persona.usuario]}
                                    alt={`imagen de ${persona.usuario}`}
                                    className="rounded"
                                />
                                <p className=''>{persona.usuario}</p>
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Persona