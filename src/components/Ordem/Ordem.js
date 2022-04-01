import React from 'react';
import styled from 'styled-components';




class Ordem extends React.Component {
    
      render(){
        return (
          <div>
            <label>Ordenação:</label>
            <select
                value={this.props.ordem} 
                onChange={this.props.mudarOrdem}>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
              
            </select>
          </div>
        );
      }
      
    }
    
    export default Ordem;

  
  // .sort((produtoA, produtoB) => this.state.ordem === 'Crescente' ? produtoA.preco - produtoB.preco : produtoB.preco - produtoA.preco)
     


  