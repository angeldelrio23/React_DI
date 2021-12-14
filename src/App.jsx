import React from 'react';

import { ComponenteEj } from './components/ComponenteEj';

export function App() {
  let listaElementos1 = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  listaElementos1.push('Elemento 4');

  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <ComponenteEj
        titulo="Componente 1"
        icono=":("
        elementos={listaElementos1}
      />
      <ComponenteEj titulo="Componente 2" icono=":*" />
      <ComponenteEj titulo="Componente 3" icono=";)" />
    </div>
  );
}
