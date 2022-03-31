import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Ordem from './components/Ordem/Ordem';
import CardProduto from './components/CardProduto/CardProduto';
import listaProdutos from '../src/Data/produtos.json';

const MainDiv = styled.div`

`

const MenuSelecao = styled.div`

`

const Footer = styled.footer`
height: 60px;
`

const Section = styled.section`
height: 500px;

div{
  display: flex;
  align-items: center;
  gap: 10px;
  select{
    height: 26px;
  }

  input{
    height: 20px;
  }
}
`


class App extends React.Component {

  state = {
    produtos: listaProdutos,
    valorMin: '',
    valorMax: '',
    busca: ''
  }

  numeroProdutos = 0;

  updateValorMin = (event) => {
    this.setState({
      valorMin: event.target.value
    })
  }

  updateValorMax = (event) => {
    this.setState({
      valorMax: event.target.value
    })
  }
  
  updateBusca = (event) => {
    this.setState({
      busca: event.target.value
    })
  }


  render() {

    return (
      <MainDiv>
        <Header />
        <hr />
        <img />
        <hr />
        <Section>

          <div>
            <Filter 
              busca={this.state.busca}
              valorMin={this.state.valorMin}
              valorMax={this.state.valorMax}
              updateValorMin={this.updateValorMin}
              updateValorMax={this.updateValorMax}
              updateBusca={this.updateBusca}
            />
            <Ordem />
            <label>{'Quantidade de produtos: ' + this.numeroProdutos}</label>
          </div>
          <hr />
          <div>
            {
              this.state.produtos
              .filter(produto => {
                return produto.NomeProduto.toLowerCase().includes(this.state.busca.toLowerCase()); 
              })
               .filter(produto => {
                  return this.state.valorMin === "" || produto.preco >= this.state.valorMin
               })
               .filter(produto => {
                  return this.state.valorMax === "" || produto.preco <= this.state.valorMax
               })
              .map((produto) => {
                return (
                  <CardProduto
                    id={produto.id}
                    preco={produto.preco}
                    img={produto.imagem}
                    name={produto.NomeProduto}
                  />
                )
              })
            }
          </div>
          <hr />

          section
        </Section>
        <hr />
        <Footer>

        </Footer>
      </MainDiv>
    );
  }

}

export default App;
