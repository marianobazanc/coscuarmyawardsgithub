import React, { useState, useEffect } from 'react'
import Imagenes from "../Imagenes"
import "./Cards.css"

const Cards = ({año}) => {
    const [resultado, setResultado] = useState({})
    const [keys, setKeys] = useState([])

    const fetching = async () => {
        let api = `https://railway-caawards-backend-production-a0e2.up.railway.app/api/years`
        const res = await fetch(api)
        const resultados = await res.json()
        let terna = resultados[0][`año${año}`]["ternas"][0]
        setKeys(Object.keys(terna))
        setResultado(terna)
    }
    useEffect(() => {
        fetching()
    }, [])
    return (
        <div className="text-center py-4">
            <div className="card rounded-0">
                <div className="card-body">
                    {
                        keys.map((terna, idx) => (
                            <div key={idx}>
                                <h2 className='card-title text-uppercase fw-bold my-4'>{terna}</h2>
                                <div className='card-text d-flex flex-wrap justify-content-center align-items-end gap-4'>
                                    {
                                        resultado[terna].nominados.map((nominado, idx) => (
                                            <div className="" key={idx}>
                                                {
                                                    idx === 0 &&
                                                    (
                                                        <div className="mb-1">
                                                            <p className='m-0'>🥇 Primer puesto</p>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    idx === 1 && (
                                                        <div className="mb-1">
                                                            <p className='m-0'>🥈 Segundo puesto</p>
                                                        </div>
                                                    )
                                                }
                                                <img
                                                    src={Imagenes[nominado]}
                                                    alt={`imagen de ${nominado}`}
                                                    className="rounded"
                                                />
                                                <p>{nominado}</p>

                                            </div>

                                        ))
                                    }
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards