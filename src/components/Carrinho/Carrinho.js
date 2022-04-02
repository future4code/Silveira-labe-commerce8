import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';
import ItemsCarrinho from './ItemsCarrinho'
import App from  '../../App'


const Card = styled.div`
overflow-y: auto;
overflow-x: hidden;
position: fixed;
right: 10px;
top: 80px;
min-height: 200px;
max-height: 600px;
width: 600px;
background-color: white;
display:flex;
color:black;
flex-direction: column;
align-items: center;
justify-items: center;
border-radius: 10px;
margin-bottom: 10px;
box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.2);
`

const Container = styled.div`
display:flex;
align-items:center;
flex-direction: column;

h2{
  width:300px;
}
`

const Button = styled.button`
position:sticky;
bottom:0px;
width: 100%;
padding: 15px;
border: none;
background-color: rgb(20, 100, 200);
font-size: 17px;
color: white;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
cursor: pointer;

:hover{
background-color: rgba(20, 100, 200, 0.7);
}
`

const ValorItens = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  padding: 8px 16px;
  margin-top: 15px;
  margin-bottom: 50px;
`;


class Carrinho extends React.Component {

  state = {
    cart: this.props.items,
    quantidade: 0
  }

  delCarrinho = (id)=>{
    let novoArray = []
    this.setState({cart: novoArray})
  }

      render(){

        let componenteItem = this.props.items.filter( (ele,pos)=>this.props.items.indexOf(ele) == pos).map((item)=>{
          return (
            <ItemsCarrinho
            id={item.id}
            key={item.id}
            preco={item.preco}
            img={item.imagem}
            name={item.NomeProduto}
            quantidade={item.quantidade}
            aoDeletar = {() => this.delCarrinho(item.id)}
            onClick = {this.props.onClick}
            />
          ) 
        })/* .filter( (ele,pos)=>this.props.items.indexOf(ele) == pos); */

        return (
          <Card>
            <h2>Carrinho</h2>
            <Container>
              {componenteItem}
            </Container>
            <ValorItens>
              {this.props.items.length === 0 ? 'Carrinho vazio' : `Valor Total: R$ ${this.props.totalCarrinho}`}
            </ValorItens>
            <Button>Comprar</Button>
          </Card>
        );
      }
      
    }
    
    export default Carrinho;