// El componente Cabera no tiene componentes hijos. => OK
// ESTADO: Cabecera no tiene estado. => OK
// MÉTODOS: Cabecera no tiene métodos. => OK
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente => OK
// Maqueta de Cabecera:
//    h1 => OK
//    p > span     (el span mostrará la cantidad recibida por props) => OK
import React from 'react'

function Cabecera( {elementosComprados} ) {
  
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{elementosComprados}</span></p>
        {/* maquetar Cabecera aquí */}
    </header>
  )
}

export default Cabecera
