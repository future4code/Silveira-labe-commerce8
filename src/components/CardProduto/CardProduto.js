import React from 'react';
import styled from 'styled-components';
import Carrinho from '../Carrinho/Carrinho';
import listaProdutos from '../../Data/produtos.json';

const CardContainer = styled.div`
  background-color: orange;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 320px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid gray;
  align-items: center;
  flex-direction: column;
  img{
    width: 100%;
    height: 100%;
  }
`

class Card extends React.Component {


  render() {
    return (
      <CardContainer>
        <img src={this.props.img}/>
        <p>{this.props.name}</p>
        <p>{this.props.preco}</p>
      </CardContainer>
    );
  }

}



export default Card;

