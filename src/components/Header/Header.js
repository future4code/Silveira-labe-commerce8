import React from 'react';
import styled from 'styled-components';
import Carrinho  from '../Carrinho/Carrinho';

const ContainerHeader = styled.header`
height: 60px;
display:flex;
justify-content: space-between;
align-items: center;
`

const Show = styled.div`
position: absolute;
right:0px;
visibility: visible;
`
const Hide = styled.div`
position: absolute;
right:0px;
visibility: hidden;
`


class Header extends React.Component {

  state = {
    cart: false 
  }

  carrinhoState = (
    <Hide>
      <Carrinho/>
    </Hide>
  )

  alternarCarrinho = () => {

    this.state.cart = !this.state.cart
    this.setState({cart: this.state.cart})

    if(this.state.cart){
      this.carrinhoState = (
        <Show>
          <Carrinho/>
        </Show>
      )
    }else{
      this.carrinhoState = (
        <Hide>
          <Carrinho/>
        </Hide>
      )
    }
  }

    
      render(){

        return (
          <ContainerHeader>
            <h1>Logo</h1>
            <button onClick={this.alternarCarrinho}>Carrinho</button>
            {this.carrinhoState} 
          </ContainerHeader>
        );
      }
      
    }
    
    export default Header;
    