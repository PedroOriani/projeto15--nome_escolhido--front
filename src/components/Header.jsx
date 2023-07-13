import styled from 'styled-components'
import { BiCart, BiLogOut, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Header() {

    const user = JSON.parse(sessionStorage.getItem("user"));
    const navigateTo = useNavigate();

    function efetuarLogout() {

        axios.post(`${import.meta.env.VITE_API_URL}/logout`)
            .then(() => {
                sessionStorage.clear()
                navigateTo("/log-in")
            })
            .catch((err) => alert(err.response.data));
    }


    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <BiMenu />
                        <p>Faça <Link to={'/log-in'}><span>LOGIN </span></Link>ou <br />
                            crie seu <Link to={'/register'}><span>CADASTRO</span></Link></p>
                        <BiLogOutCircle onClick={efetuarLogout} />
                    </Acess>
                    <h1>DrivenTech</h1>
                    <Cart>
                        <BiCart />
                        <a>Carrinho</a>
                    </Cart>

                </MenuContainer>


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
        font-family: 'Montserrat';
        font-weight: 400;
        margin-right: 10px;
        color: white;
    }
    span {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 15px;
    }
    a {
        text-decoration: none;
        color: white;
    }
`
const Cart = styled.div`
    display: flex;
    flex-direction: column;
    
    a {
        font-family: 'Montserrat';
        font-weight: 400;
        margin-left: 10px;
        color: white;
    }
   
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
   
`