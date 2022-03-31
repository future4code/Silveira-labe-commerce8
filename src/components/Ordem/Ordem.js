import React from 'react';
import styled from 'styled-components';

// tem que ter um ordem no state do App.js pra pdoer funcionar a função?


mudarOrdem = (event) => {
  this.setState({ ordem: event.target.value  })
}

class Ordem extends React.Component {
    
      render(){
        return (
          <div>
            <label>Ordenação:</label>
            <select
                value={this.state.ordem} 
                onChange={this.mudarOrdem}>
              <option>Nenhum</option> 
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
              
            </select>
          </div>
        );
      }
      
    }
    
    export default Ordem;

  
  // .sort((produtoA, produtoB) => this.state.ordem === 'Crescente' ? produtoA.preco - produtoB.preco : produtoB.preco - produtoA.preco)
     


  