import './nav.css'


import React from 'react'
import {FaStore} from 'react-icons/fa'
import NewBar from './newBar'

function Style() {
    return (
        

     <>
      <div className="container">
      <span className="icon">
        <FaStore/>
        <h8 className="slogan">MaxStore</h8>
      </span>
      
      <ul className="listas">
        <li className="li">Home</li>
        <li className="li">Produtos</li>
        <li className="li">Carrinho</li>
      </ul>

      <div className="button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      </div>
      <NewBar/>
      </>


    );
}

export default Style
