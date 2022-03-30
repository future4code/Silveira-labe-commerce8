import React from 'react';
import styled from 'styled-components';

const CarDiv = styled.div`
  position: absolute;
  right: 0px;
  top: 80px;
  border-radius: 10px;
  border: solid 1px;
  margin-right: 5px;
  visibility: hidden;
  height: 300px;
  width: 300px;
  background-color: white;

`

class Carrinho extends React.Component {
    
      render(){
        return (
          <CarDiv>  
            <div>
            carrinho
            </div>
          </CarDiv>
        );
      }
      
    }
    
    export default Carrinho;