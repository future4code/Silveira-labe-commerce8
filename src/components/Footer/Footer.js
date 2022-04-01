import React from "react";
import styled from "styled-components";
import facebook from "../../Imagens/facebook.png"
import twitter from "../../Imagens/twitter.png"
import instagram from "../../Imagens/instagram.png"

const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(20, 100, 200);
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    height: 100px;

    p {
        color: white;
    }
`
const RedesSociais = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImagemIcones = styled.div `
        display: flex;
        width: 207px;
        justify-content: space-around;
        margin-bottom: 10px;

    img {
        width: 30px;
        }
    }

`

class Footer extends React.Component {
    render(){
        return (
            <ContainerFooter>
                <p> 🚀 Galaxy Quest - Passagens de Ida para todo o Sistema Solar 🚀 </p>
               
                <RedesSociais>
                    <ImagemIcones>
                        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Ícone Instagram"/></a>
                        <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt="Ícone Twitter"/></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Ícone Facebook"/></a>
                    </ImagemIcones>
                </RedesSociais>
            </ContainerFooter>
        );
    }
}

export default Footer

