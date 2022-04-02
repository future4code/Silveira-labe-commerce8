import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';

const Item = styled.div`

display:flex;
justify-content: space-around;
align-items: center;
margin: 10px;
border-bottom:solid 1px;
border-top:solid 1px;
width: 470px;

h2{
  font-size: 16px;
}


h3{
  font-size: 17px;
}

p{
    margin:0px;
    width: 50%;
}

button{
    border:none;
    height: 23px;
    width: 25px;
    color: red;
    cursor: pointer;
    background-color: white;
    font-size: 18px;
}

`



class ItemCarrinho extends React.Component {

  componentDidUpdate(){
    
  }


      render(){
        return (
          <Item>
            <h2>{this.props.quantidade} x </h2>
            <h3>{this.props.name}</h3>
            <p>R$ {this.props.preco}</p>
            <button onClick={() => this.props.onClick(this.props.id)}><i class="far fa-trash-alt"></i></button>
          </Item>
        );
      }
      
    }
    
    export default ItemCarrinho;