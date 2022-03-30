import React from 'react';
import styled from 'styled-components';
import Carrinho  from '../Carrinho/Carrinho';

const ContainerHeader = styled.header`
height: 60px;
display:flex;
justify-content: space-between;
align-items: center;
`


class Header extends React.Component {
    
      render(){
        return (
          <ContainerHeader>
            <h1>Logo</h1>
            <button>Carrinho</button>           
            <Carrinho>
                carrinho
            </Carrinho>          
          </ContainerHeader>
        );
      }
      
    }
    
    export default Header;
    