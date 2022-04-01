import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Data/produtos.json';
import ItemsCarrinho from './ItemsCarrinho'
import App from  '../../App'


const Card = styled.div`
overflow: hidden;
position: fixed;
right: 10px;
top: 80px;
height: 420px;
width: 300px;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
justify-items: center;
border-radius: 10px;
border:solid 2px;
margin-bottom: 10px;
`

const CartDiv = styled.div`
  position: fixed;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  right: 0px;
  top: 60px;
  border-radius: 10px;
  border: solid 1px;
  margin-right: 5px;
  height: 400px;
  width: 300px;
  background-color: white;

  h2{
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
  }
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
position:absolute;
bottom:0px;
width: 100%;
height: 40px;
border: none;
background-color: black;
color: white;
border: solid black 1px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;

:hover{
  background-color: white;
  color: black ;
}
`



class Carrinho extends React.Component {

  state = {
    cart: this.props.items
  }

  delCarrinho = (id)=>{
    let novoArray = []
    this.setState({cart: novoArray})
  }

      render(){

        let componenteItem = this.props.items.map((item)=>{
          return (
            <ItemsCarrinho
            id={item.id}
            preco={item.preco}
            img={item.imagem}
            name={item.NomeProduto}
            aoDeletar = {() => this.delCarrinho(item.id)}
            onClick = {this.props.onClick}
            />
          ) 
        })

        return (
          <Card>
            <h2>Carrinho</h2>
            <Container>
              {componenteItem}
            </Container>
            <Button>Comprar</Button>
          </Card>
        );
      }
      
    }
    
    export default Carrinho;