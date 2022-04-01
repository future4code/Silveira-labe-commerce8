import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';
import Carrinho from '../Carrinho/Carrinho';

const ContainerHeader = styled.header`
height: 60px;
display:flex;
justify-content: space-between;
align-items: center;
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
        <h1>Logo</h1>
        <button onClick={this.showCarrinho}>Carrinho</button>
        {componenteCarrinho}
      </ContainerHeader>
    );
  }

}

export default Header;
