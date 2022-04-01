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

const DivFiltros = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  select{
    height: 26px;
  }
`

const ProdutosNaTela = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
 
  
`

const DivCard = styled.div`
border:solid 2px;
display:flex;
flex-direction:column;
background-color: white;
margin: 50px;
align-items: center;
`

const Section = styled.section`
  background-color: yellow;

  input{
    height: 20px;
  }

`




class App extends React.Component {

  state = {
    produtos: listaProdutos,
    filtroCarrinho: [],
    stateButton: false,
    ordem: "Crescente",
    valorMin: '',
    valorMax: '',
    busca: ''

  }


  addInCart = (id) => {
    listaProdutos.map((produto) => {
      if (produto.id === id) {
        this.state.filtroCarrinho = [...this.state.filtroCarrinho, produto]
        this.setState({ filtroCarrinho: this.state.filtroCarrinho })

      }
    })
  }


  delInCart = (id) => {

    let novoArray = this.state.filtroCarrinho.filter((item) => {
      return item.id !== id
    })
    this.state.filtroCarrinho = novoArray
    this.setState({ filtroCarrinho: this.state.filtroCarrinho })
    console.log(this.state.filtroCarrinho)
    console.log(this.state.produtos.length)
  }


  mudarOrdem = (event) => {
    this.setState({ ordem: event.target.value })
  }

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

    let listaProdutosnaTela = this.state.produtos
      .filter(produto => {
        return produto.NomeProduto.toLowerCase().includes(this.state.busca.toLowerCase());
      })
      .filter(produto => {
        return this.state.valorMin === "" || produto.preco >= this.state.valorMin
      })
      .filter(produto => {
        return this.state.valorMax === "" || produto.preco <= this.state.valorMax
      })
      .sort((produtoA, produtoB) => this.state.ordem === 'Crescente' ? produtoA.preco - produtoB.preco : produtoB.preco - produtoA.preco)
      .map((produto) => {
        return (
          <DivCard>
            <CardProduto
              id={produto.id}
              preco={produto.preco}
              img={produto.imagem}
              name={produto.NomeProduto}
            />
            <button onClick={() => this.addInCart(produto.id)}>adicionar ao carrinho</button>
          </DivCard>
        )
      })

    return (
      <MainDiv>
        <Header onClick={this.delInCart} filtroCarrinho={this.state.filtroCarrinho} />
        <Section>
          <DivFiltros>
            <Filter
              busca={this.state.busca}
              valorMin={this.state.valorMin}
              valorMax={this.state.valorMax}
              updateValorMin={this.updateValorMin}
              updateValorMax={this.updateValorMax}
              updateBusca={this.updateBusca}
            />
            <Ordem mudarOrdem={this.mudarOrdem} />

            <label>{'Quantidade de produtos: ' + listaProdutosnaTela.length}</label>
          </DivFiltros>

          <ProdutosNaTela>
            {
              listaProdutosnaTela
            }

          </ProdutosNaTela>
        </Section>
        <Footer>
        </Footer>
      </MainDiv>
    );
  }

}

export default App;
