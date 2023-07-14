import styled from 'styled-components'
import { BiCart, BiLogOut, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import PathContext from '../context/PathContext';
import { BiPlusCircle } from "react-icons/bi"
import { useEffect } from 'react';
import { useState } from 'react';

export default function Header() {

    const { path } = useContext(PathContext)

    const token = JSON.parse(sessionStorage.getItem("token"));
    const user = JSON.parse(sessionStorage.getItem("user"));

    //TESTANDO OS EMAILS JA QUE NAO CONSEGUIMOS FAZER O USER.EMAIL AINDA
    //const email = user.email
    const email = 'admin@admin.com'
    //const email = 'email@email.com'

    const navigateTo = useNavigate();

    const [emailADM, setEmailADM] = useState(0);

    function verifyAdm(){
        if (email === 'admin@admin.com'){
            setEmailADM(1)
        }
    }

    useEffect(verifyAdm, []);

    function efetuarLogout() {

        axios.post(`${import.meta.env.VITE_API_URL}/logout`)
            .then(() => {
                sessionStorage.clear();
                navigateTo("/log-in");
            })
            .catch((err) => alert(err.response.data));
    }

    function goHome(){
        navigateTo('/')
    }

    function changePage(){
        if(path === 'cart'){
            navigateTo('/')
        }else{
            navigateTo('/cart');
        }
    }

    function addProduct(){

    }

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <MenuIcon />
                        <p>Faça <Link to={'/log-in'}><span>LOGIN </span></Link>ou <br />
                            crie seu <Link to={'/register'}><span>CADASTRO</span></Link></p>
                        <SCLogOutIcon onClick={efetuarLogout} logged={token} />
                    </Acess>
                    <SCTitle onClick={goHome}>DrivenTech</SCTitle>
                    <Cart onClick={changePage} >
                        <CartIcon path={path === 'cart'} />
                        <a>{path === 'home' ? 'Carrinho' : 'Voltar às compras'}</a>
                    </Cart>
                    <SCAddProduct onClick={addProduct} emailADM={emailADM === 1}>
                        <SCBiPlusCircle />
                        <p>Adicionar Produto</p>
                    </SCAddProduct>
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
    align-items: center;
    p {
        font-family: 'Montserrat';
        font-weight: 400;
        margin-right: 10px;
        margin-left: 20px;
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
    align-items: center;

    cursor: pointer;

    margin-right: 20px;
    
    a {
        font-family: 'Montserrat';
        font-weight: 400;
        margin-left: 10px;
        color: white;
        font-size: 20px;
    }
`

const SCTitle = styled.p`
    font-size: 50px;
    font-weight: 600;
    font-family: 'Montserrat';

    color: #ffffff;
    
    margin-right: 100px;

    cursor: pointer;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuIcon = styled(BiMenu)`
    color: #ffffff;

    width: 30px;
    height: 30px;
`

const CartIcon = styled(BiCart)`
    color: #ffffff;

    width: 30px;
    height: 30px;

    display: ${(props) => (props.path ? 'none' : 'block')}
`

const SCLogOutIcon = styled(BiLogOutCircle)`
    display: ${(props) => (props.token ? 'block' : 'none')}
`

const SCAddProduct = styled.div`
    position: fixed;
    right: calc(20%);

    display: ${props => props.emailADM ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    border: 1px solid #ffffff;
    padding: 5px;
    border-radius: 14px;

    p{
        margin-top: 5px;
        font-size: 25px;
        font-family: 'Montserrat';
        color: #ffffff;
    }
`

const SCBiPlusCircle = styled(BiPlusCircle)`
    color: #ffffff;

    width: 30px;
    height: 30px;
`