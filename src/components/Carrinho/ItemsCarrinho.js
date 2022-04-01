import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';

const Item = styled.div`

display:flex;
justify-content: space-between;
align-items: center;
margin: 10px;
border-bottom:solid 1px;
border-top:solid 1px;
width: 270px;

p{
    margin:0px;
}

button{
    border:none;
    height: 23px;
    width: 25px;
    background-color: white;

    :hover{
        background-color: red;
    }
}

`



class ItemCarrinho extends React.Component {

  componentDidUpdate(){
    
  }


      render(){
        return (
          <Item>
            <p>{this.props.name}</p>
            <p>{this.props.preco} R$</p>
            <button onClick={() => this.props.onClick(this.props.id)}>X</button>
          </Item>
        );
      }
      
    }
    
    export default ItemCarrinho;