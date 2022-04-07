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
  margin-top: 30px;
  select{
    height: 26px;
  }
`

const ProdutosNaTela = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
 
  
`

const DivCard = styled.div`
border:solid 1px #ccc;
border-radius: 10px;
overflow: hidden;
box-shadow: 0px 2px 15px rgba(0,0,0,0.7);
display:flex;
flex-direction:column;
background-color: white;
margin: 50px;
align-items: center;
button{
  width: 100%;
  height: 50px;
  border: 0;
  background-color: rgb(20, 100, 200);
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  :hover{    
    background-color: rgba(20, 100, 200,0.7);
  }
  :active{    
    background-color: rgb(20, 100, 200);
  }
}
`

const Section = styled.section`
  input{
    height: 20px;
  }

`

const MainImg = styled.div`
height:500px;
background: url(${(props)=>props.imgUrl});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display:flex;
justify-content:center;
align-items: center;

h1{
  font-size:60px;
  color:white;
  font-family: 'Rajdhani', sans-serif;
}
`




class App extends React.Component {

  state = {
    produtos: listaProdutos,
    filtroCarrinho: [],
    totalCarrinho: 0,
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
        produto.quantidade = produto.quantidade + 1; 
        this.setState({ totalCarrinho:  this.state.totalCarrinho + produto.preco })
      }        
    })
  }


  delInCart = (id) => {

    listaProdutos.map((produto) => {
      if (produto.id === id) {        
        if(produto.quantidade > 0){
          produto.quantidade = produto.quantidade - 1;        
          this.setState({ totalCarrinho:  this.state.totalCarrinho - produto.preco })
        }
        if(produto.quantidade <= 0){
          let novoArray = this.state.filtroCarrinho.filter((item) => {
            return item.id !== id
          })
          this.state.filtroCarrinho = novoArray
          this.setState({ filtroCarrinho: this.state.filtroCarrinho })
        }
      }
    })
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
            <button onClick={() => this.addInCart(produto.id)}><i class="fas fa-cart-plus"></i></button>
          </DivCard>
        )
      })

    return (
      <MainDiv>
        <Header onClick={this.delInCart} filtroCarrinho={this.state.filtroCarrinho} totalCarrinho={this.state.totalCarrinho}/>
        <MainImg imgUrl='https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
          <h1>Explore a Galáxia</h1>
        </MainImg>
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
