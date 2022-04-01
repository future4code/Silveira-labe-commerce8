import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';
import Carrinho from '../Carrinho/Carrinho';

const ContainerHeader = styled.header`
position: absolute;
width:100%;
height: 80px;
display:flex;
justify-content: space-between;
align-items: center;
color: white;
background-color: rgba(0,0,0,0.7);
box-shadow: 0px 2px 15px rgba(255,255,255,0.7);

h1{
  padding-bottom:5px;
  margin-left: 10px;
}

`

const ButtonCarrinho = styled.button`
  border:none;
  background-color: transparent;
  margin-right: 40px;
  cursor: pointer;

  i{
    font-size:30px;
    color: white;
    transition: 0.2s;

    :hover{
      font-size:32px;
    }

  }
`

const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  i{
    font-size: 45px;
  }

  
`



class Header extends React.Component {

  state = {
    comprando: false,
  }

  showCarrinho = ()=>{
    this.state.comprando = !this.state.comprando
    this.setState({comprando: this.state.comprando})
    console.log(this.state.comprando)
  }

  render() {

    let componenteCarrinho
    if(this.state.comprando){
       componenteCarrinho = <Carrinho onClick={this.props.onClick} items = {this.props.filtroCarrinho} />     
    }
    return (
      <ContainerHeader>
        <DivLogo>
        <i class="fa-solid fa-rocket"></i>
        <h1>Galaxy Quest</h1>
        </DivLogo>
        <ButtonCarrinho onClick={this.showCarrinho}><i class="fa-solid fa-cart-shopping"></i></ButtonCarrinho>
        {componenteCarrinho}
      </ContainerHeader>
    );
  }

}

export default Header;
