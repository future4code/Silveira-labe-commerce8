import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Ordem from './components/Ordem/Ordem';
import CardProduto from './components/CardProduto/CardProduto';
import listaProdutos from '../src/Data/produtos.json';
import Footer from './components/Footer/Footer';

const MainDiv = styled.div`

`

const MenuSelecao = styled.div`

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
    ordem: ""
  }

  numeroProdutos = 0;

  mudarOrdem = (event) => {
    this.setState({ ordem: event.target.value  })
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
            <Filter />
            <hr />
            <Ordem onChange={this.props.mudarOrdem} />
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
