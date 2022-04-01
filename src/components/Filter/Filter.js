import React from 'react';
import styled from 'styled-components';

class Filter extends React.Component {
    
      render(){
        return (
          <div>
              <label>Filtro:</label>
            <input
              type='number'
              placeholder='Valor Mínimo'
              value={this.props.valorMin}
              onChange={this.props.updateValorMin}
            />
            <input
              type='number'
              placeholder='Valor Maximo'
              value={this.props.valorMax}
              onChange={this.props.updateValorMax}
            />
            <input
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