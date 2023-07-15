
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import PathContext from '../context/PathContext';
import { HeaderContainer, MenuContainer, MenuIcon, Acess, SCLogOutIcon, SCTitle, Cart, CartIcon } from './../pages/HomePage/styleHome'

export default function Header() {

    const { path } = useContext(PathContext)

    const token = JSON.parse(sessionStorage.getItem("token"));
    const user = JSON.parse(sessionStorage.getItem("user"));

    //TESTANDO OS EMAILS JA QUE NAO CONSEGUIMOS FAZER O USER.EMAIL AINDA
    //const email = user.email
    const email = 'admin@admin.com'
    //const email = 'email@email.com'

    const navigateTo = useNavigate();

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

  

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <MenuIcon />
                        <p>Faça <Link to={'/log-in'}><span>LOGIN </span></Link>ou <br />
                            crie seu <Link to={'/register'}><span>CADASTRO</span></Link></p>
                    </Acess>
                    <SCTitle onClick={goHome}>DrivenTech</SCTitle>
                    <Cart onClick={changePage} >
                        <CartIcon path={path === 'cart'} />
                        <a>{path === 'home' ? 'Carrinho' : 'Voltar às compras'}</a>
                    </Cart>
                </MenuContainer>
            </HeaderContainer>
        </>
    )
}
