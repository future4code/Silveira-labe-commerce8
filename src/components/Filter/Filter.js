import React from 'react';
import styled from 'styled-components';

class Filter extends React.Component {
    
      render(){
        return (
          <div>
              <label>Filtro:</label>
            <input
              placeholder='Valor Mínimo'
              type='number'
            />
            <input
              placeholder='Valor Maximo'
              type='number'
            />
            <input
              placeholder='Buscar Produto'
              type='text'
            />
          </div>
        );
      }
      
    }
    
    export default Filter;