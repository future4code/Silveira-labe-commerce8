import React from 'react';
import styled from 'styled-components';
import Carrinho from '../Carrinho/Carrinho';
import listaProdutos from '../../Data/produtos.json';

const CardContainer = styled.div`
  background-color: orange;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 320px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid gray;
  align-items: flex-end;
`

class Card extends React.Component {

    
      render(){
        return (
          <CardContainer>
            <p>{this.props.id}</p>
            <p>{this.props.name}</p>
            <p>{this.props.preco}</p>
            <p>{this.props.imagem}</p>
          </CardContainer>
        );
      }
      
    }

    
    
    export default Card;

