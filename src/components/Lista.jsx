import React from 'react';
import ComponenteLista from './ComponenteLista';

export function Lista(props) {
  for (i = 0; props.elementos.length; i++) {
    <ComponenteLista texto={props.elementos[i]} />;
  }

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        <ComponenteLista texto="Elemento 1" />
        <ComponenteLista texto="Elemento 2" />
        <ComponenteLista texto="Elemento 3" />
      </ul>
    </div>
  );
}
