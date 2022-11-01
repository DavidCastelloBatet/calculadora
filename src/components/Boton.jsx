import React from 'react';
import './Boton.css';

const Boton = (props) => {
  // Funcion q comprueba si el valor recibido es numero o operador
  // Si es operador, retorna true
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  return (
    <button
      // Aplicamos clase boton-contendor siempre. Pasamos por parametro
      // a la funcion esOperador los props.children. Si el retorno de la
      // funcion es true le asignamos también la clase operador
      className={`boton-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Boton;
