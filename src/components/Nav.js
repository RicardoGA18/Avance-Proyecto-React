import React from 'react'

export default function(){
  return (
    <div className="l-container Nav">
      <div className="l-secure">
        <nav className="Nav__Links">
          <ul>
            <li>
              <img src="/assets/logo.svg"/>
            </li>
            <li>
              <p>INICIO</p>
            </li>
            <li>
              <p>NOSOTROS</p>
            </li>
            <li>
              <p>PRODUCTOS</p>
            </li>
            <li>
              <p>CONTACTO</p>
            </li>
          </ul>
        </nav>
        <div className="Nav__Buttons">
          <form className="Nav__Form">
            <input type="search" placeholder="Buscar productos" />
            <input type="image" src="/assets/search.svg"/>
          </form>
          <div className="Nav__User">
            <img src="/assets/user.svg"/>
            <p>INICIAR SESIÓN</p>
          </div>
          <div className="Nav__Cart">
            <img src="/assets/cart.svg"/>
          </div>
        </div>
      </div>
    </div>
  )
}