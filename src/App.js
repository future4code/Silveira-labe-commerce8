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

const DivCard = styled.div`
border:solid 2px;
display:flex;
flex-direction:column;
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
    filtroCarrinho: [],
    stateButton: false

  }

  addInCart = (id) => {
    listaProdutos.map((produto) => {
      if(produto.id === id){
        this.state.filtroCarrinho = [...this.state.filtroCarrinho,produto]
        this.setState({filtroCarrinho: this.state.filtroCarrinho})
        
      }
    })
  }


  delInCart = (id)=>{
    
    let novoArray = this.state.filtroCarrinho.filter((item)=>{
      return item.id !== id
    })
    this.state.filtroCarrinho = novoArray
    this.setState({filtroCarrinho: this.state.filtroCarrinho})
    console.log(this.state.filtroCarrinho)
  }


  render() {

    return (
      <MainDiv>
        <Header onClick={this.delInCart} filtroCarrinho = {this.state.filtroCarrinho}/>
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
