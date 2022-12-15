import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Imagenes from "../../components/Imagenes"
import "./perfil.css"

const Perfil = () => {
    const [resultado, setResultado] = useState([])
    const [nominaciones, setNominaciones] = useState([])
    const [premios, setPremios] = useState([])
    const [redes, setRedes] = useState([])
    const { id } = useParams()

    const fetching = async () => {
        let api = `https://railway-caawards-backend-production-a0e2.up.railway.app/api/personas/${id}`
        const res = await fetch(api)
        const resultados = await res.json()
        setResultado(resultados)
        setNominaciones(resultados.ternas.nominaciones)
        setPremios(resultados.ternas.premios)
        setRedes(resultados.redes)
    }
    useEffect(() => {
        fetching()
    }, [])
    return (
        <div className="container">
            <div className='d-flex justify-content-center gap-4 py-3'>
                <img
                    src={Imagenes[resultado.usuario]}
                    alt={`Foto de ${resultado.usuario}`}
                    className="rounded imagen"
                />
                <div className="">
                    <h1 className='m-0'>{resultado.usuario}</h1>
                    <p className='mb-2'>{resultado.nombre}</p>
                    <ul className='list-unstyled d-flex gap-3 mb-2'>
                        {
                            redes.map((red, idx) => (
                    <li className='text-white' key={idx}><a target="_blank" className='text-decoration-none' href={red[1]}>{red[0] === "Instagram" ? <i className="fa-brands fa-instagram me-1"></i> : <i className="fa-brands fa-twitter me-1"></i>}{red[0]}</a></li>
                        ))
                        }
                    </ul>

                    <div className="d-flex gap-4">
                        <div className="">
                            <p className='m-0'><u>Nominaciones</u></p>
                            <ul className='text-white m-0'>
                                {
                                    nominaciones.map((nominacion, idx) => (
                                        <li key={idx}>{nominacion}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            <p className='m-0'><u>Premios</u></p>
                            <ul className='text-white list-unstyled'>
                                {
                                    premios.map((premio, idx) => (
                                        <li key={idx} className='ms-2'>{premio}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <p className='text-center text-muted'><em>Fuente: <a target="_blank" href="https://es.wikipedia.org/wiki/Coscu_Army_Awards" className='text-muted'>Wikipedia</a></em></p>
        </div>
    )
}

export default Perfil