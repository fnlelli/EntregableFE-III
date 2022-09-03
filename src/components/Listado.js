// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item => OK
// ESTADO: Listado no necesita manejar un estado. => OK
// MÉTODOS: Listado no requiere de métodos. => OK
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos. => OK

import React from 'react'
import Item from './Item'
import datosProd from './data.json'

export default function Listado( {aumentarElementosComprados} ) {
  return (
    <div className='container'>
      {datosProd.map( prod => (
        <Item
        key = {prod.id}
        nomProd = {prod.producto.nombre} 
        descProd = {prod.producto.descripcion}
        cantInicial = {prod.stock}
        aumentarElementosComprados = {aumentarElementosComprados}              
        />
      ))}
      {/* renderizamos los Item aquí */}
    </div>
  )
}
