import React from 'react';
import styled from 'styled-components';


const InputFiltro = styled.input`
  margin: 0 10px;
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

class Filter extends React.Component {
    
      render(){
        return (
          <div>
              <label>Filtro:</label>
            <InputFiltro
              type='number'
              placeholder='Valor Mínimo'
              value={this.props.valorMin}
              onChange={this.props.updateValorMin}
            />
            <InputFiltro
              type='number'
              placeholder='Valor Maximo'
              value={this.props.valorMax}
              onChange={this.props.updateValorMax}
            />
            <InputFiltro
              type='text'
              placeholder='Buscar Produto'
              value={this.props.busca}
              onChange={this.props.updateBusca}
            />
          </div>
        );
      }
      
    }
    
    export default Filter;