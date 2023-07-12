import styled from 'styled-components'
import { BiCart, BiMenu } from "react-icons/bi";

export default function Header() {

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <BiMenu />
                        <p>Login</p>
                        <p>Cadastro</p>
                        <p>Home</p>
                    </Acess>

                    <Cart>
                        <a>Carrinho</a>
                        <BiCart />
                    </Cart>
                </MenuContainer>
                <LogoContainer>
                    <h1>DrivenTech</h1>
                </LogoContainer>
            </HeaderContainer>


        </>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    padding: 15px;
    
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background-color: #255566;
    h1 {
        font-family: 'Montserrat';
        font-size: 30px;
        font-weight: 600;
        color: white
    }
    
   
`
const Acess = styled.div`
    display: flex;
    p {
        font-family: 'Roboto';
        font-weight: 400;
        margin-right: 10px;
    }
`
const Cart = styled.div`
    display: flex;
    
    p {
        font-family: 'Roboto';
        font-weight: 400;
        margin-left: 10px;
    }
`