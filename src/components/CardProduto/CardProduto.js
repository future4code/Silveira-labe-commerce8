import React from 'react';
import styled from 'styled-components';
import Carrinho from '../Carrinho/Carrinho';
import listaProdutos from '../../Data/produtos.json';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  img{
    width: 100%;
    max-height: 260px;
    min-height: 260px;
  }
  h3{
    text-align: center;
    width: 80%;
    min-height: 60px;
  }
  p{
    margin: 0;
    font-size: 18px;
  }
`

class Card extends React.Component {


  render() {
    return (
      <CardContainer>
        <img src={this.props.img}/>
        <h3>{this.props.name}</h3>
        <p>R$ {this.props.preco},00</p>
      </CardContainer>
    );
  }

}



export default Card;

