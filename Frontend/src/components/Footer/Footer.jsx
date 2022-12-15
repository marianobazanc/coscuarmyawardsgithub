import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-4 d-flex flex-column align-items-center mt-3'>

      <div className="">
        <p className='m-0'>Redes oficiales de los premios</p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="https://www.instagram.com/caawards/" target="_blank" className='fs-3 text-white'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/CAAwards" target="_blank" className='fs-3 text-white'><i className="fa-brands fa-twitter"></i></a>
          <a href="https://twitch.tv/coscu" target="_blank" className='fs-3 text-white'><i className="fa-brands fa-twitch"></i></a>
        </div>
      </div>
      <p className="text-muted mb-1">Contacto@coscuarmyawards.com</p>
      <div className="text-center">
        <p className='mb-2'>Pagina no oficial de <em>Coscu Army Awards</em> | Pagina hecha por: <a href="https://www.marianobazan.com" target="_blank" className='text-white'>Mariano Bazan</a></p>
      </div>
    </footer>
  )
}

export default Footer