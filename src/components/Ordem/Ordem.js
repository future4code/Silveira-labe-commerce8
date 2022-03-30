import React from 'react';
import styled from 'styled-components';

class Ordem extends React.Component {
    
      render(){
        return (
          <div>
            <label>Ordenação:</label>
            <select>
              <option>Nenhum</option>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </div>
        );
      }
      
    }
    
    export default Ordem;