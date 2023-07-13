import styled from 'styled-components'
import { BiCart, BiMenu } from "react-icons/bi";
import Logo from './Logo';

export default function Header() {

    const user = JSON.parse(sessionStorage.getItem("user"));

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <BiMenu />
                        <p>Logout</p>
                        <p>Olá, Fulano </p>
                        <p>Home</p>
                    </Acess>

                    <Cart>
                        <a>Carrinho</a>
                        <BiCart />
                    </Cart>
                </MenuContainer>
               <Logo />
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