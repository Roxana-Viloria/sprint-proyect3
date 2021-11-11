import './NotFound.css' 
import React from 'react'
import confused from '../../pictures/confusion.png'


function NotFound() {
  
    return (
    <div className="reject">
        <div >
            <img className="doubtImage" src={confused} alt=" no se encontró lo que busca"></img>
            <h2>Lo sentimos, no hemos encontrado lo que buscas.</h2>
            <h3>¡Intentalo de nuevo!</h3>
        </div>
    </div>
  );
}

export default NotFound;