import React from 'react';
import styled from 'styled-components';
import Carrinho from '../Carrinho/Carrinho';
import listaProdutos from '../../Data/produtos.json';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  height: 150px;
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

