import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 2px solid black;

`
class Card extends React.Component {
    
      render(){
        return (
          <CardContainer>
            <p>{this.props.id}</p>
            <p>{this.props.name}</p>
            <p>{this.props.preco}</p>
            <p>{this.props.imagem}</p>
          </CardContainer>
        );
      }
      
    }
    
    export default Card;