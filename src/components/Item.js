// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un núm p almacenar la cant de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click d su boton p restar la cant en stock de 
//          sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock 
//        y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe 
//                  estar deshabilitado y decir "Sin stock")
import React from "react";
import { useState } from "react";

function Item( {nomProd, descProd, cantInicial, aumentarElementosComprados} ) {

  const [cantStock, setCantidadStock] = useState(cantInicial)

  const restarCantidadStock = () => {
    setCantidadStock(function (prevState){
      return (prevState - 1)
    });
  }  
  
{/*LINEA 21-22 puedo hacer funcion flecha => setCantidadStock(prevState => prevState - 1) */}

  return (
    <div className='producto'>
      <h3>{nomProd}</h3>
      <p>{descProd}</p>
      <h5>En stock: <span>{cantStock > 0 ? cantStock : "agotado"}</span></h5>
      <button disabled={cantStock===0} onClick={() => {restarCantidadStock(); aumentarElementosComprados()}}>
        {cantStock === 0 ? "SIN STOCK" : "COMPRAR"}
      </button>
      
      {/* cuando en un evento pongo una func dentro de una funcion y cdo llamo directamente a la funcion consultar */}

      {/* maquetar Item aquí */}
    </div>
  )
}

export default Item