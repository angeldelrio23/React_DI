import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;
    this.elementos = props.elementos;
    this.listainicio = [];

    if (this.elementos !== undefined) {
      for (let i = 0; i < this.elementos.length; i++) {
        this.listainicio.push(
          <ComponenteListaClase
            done={this.elementos[i].done}
            texto={this.elementos[i].texto}
            prioridad={this.elementos[i].prioridad}
          />
        );
      }
    }
    this.state = { listacomponentes: this.listainicio };
    this.valorTextInput = React.createRef();
    this.valorPrioritySelect = React.createRef();
  }

  addElement() {
    const newLista = this.state.listacomponentes.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.current.value}
        prioridad={this.valorPrioritySelect.current.value}
      />
    );
    this.setState({ listacomponentes: newLista });
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {this.state.listacomponentes}
          <li>
            <input
              ref={this.valorTextInput}
              type="text"
              placeholder="Introduce una tarea"
            />
            <br />
            <select ref={this.valorPrioritySelect}>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
            <button onClick={this.addElement.bind(this)}>Agregar</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default ListaClase;
