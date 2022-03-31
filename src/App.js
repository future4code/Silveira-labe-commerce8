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
    produtos: listaProdutos
  }

  numeroProdutos = 0;

  render() {

    return (
      <MainDiv>
        <Header />
        <hr />
        <img />
        <hr />
        <Section>

          <div>
            <Filter />
            <hr />
            <Ordem />
            <label>{'Quantidade de produtos: ' + this.numeroProdutos}</label>
          </div>
          <hr />
          <div>
            {
              this.state.produtos.map((produto) => {
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
