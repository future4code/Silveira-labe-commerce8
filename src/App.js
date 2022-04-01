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
const ContainerGrid = styled.div`

`
const DivProdutos = styled.div`
  background-color: aqua;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  justify-items: center;
`
const DivCard = styled.div`
border:solid 2px;
display:flex;
flex-direction:column;
`

const Section = styled.section`
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
    stateButton: false,    
    ordem: "",
    valorMin: '',
    valorMax: '',
    busca: ''

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


  mudarOrdem = (event) => {
    this.setState({ ordem: event.target.value  })
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
            <Ordem onChange={this.props.mudarOrdem} />
            <Filter 
              busca={this.state.busca}
              valorMin={this.state.valorMin}
              valorMax={this.state.valorMax}
              updateValorMin={this.updateValorMin}
              updateValorMax={this.updateValorMax}
              updateBusca={this.updateBusca}
            />
                
            <label>{'Quantidade de produtos: ' + this.numeroProdutos}</label>
          </div>
          </Section>
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
                  <DivProdutos>
                  <DivCard>
                    <CardProduto
                      id={produto.id}
                      preco={produto.preco}
                      img={produto.imagem}
                      name={produto.NomeProduto}
                    />
                    <button onClick={() => this.addInCart(produto.id)}>adicionar ao carrinho</button>
                  </DivCard>
                  </DivProdutos>
                )
              })          
            }
          </div>
          <hr />
        <Footer>
        </Footer>
      </MainDiv>
    );
  }

}

export default App;