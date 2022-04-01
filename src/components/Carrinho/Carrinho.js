import React from 'react';
import styled from 'styled-components';

const CartDiv = styled.div`
  position: fixed;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  right: 0px;
  top: 60px;
  border-radius: 10px;
  border: solid 1px;
  margin-right: 5px;
  height: 400px;
  width: 300px;
  background-color: white;

  h2{
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  button{
    position: relative;
    top: 10px;
    background-color: black;
    color:white;
    width: 100.5%;
    height: 30px;
    border: solid black 0.5px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

    :hover{
      color:black;
      background-color: white;
    }
  }
`

const CartDisplay = styled.div`
 width: 95%;
 height: 80%;
`



class Carrinho extends React.Component {

  state = {
    produtos: []
  }
    
      render(){
        return (
          <CartDiv>
            <h2>Carrinho</h2>  
            <CartDisplay>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ul>
            </CartDisplay>
            <button>Comprar</button>
          </CartDiv>
        );
      }
      
    }
    
    export default Carrinho;