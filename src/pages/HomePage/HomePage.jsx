import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'
import notebook from './../../../assets/notebook.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import PathContext from '../../context/PathContext';
import { HeaderContainer, MenuContainer, Acess, SCLogOutIcon, SCTitle, Cart, CartIcon, ContainerGeral, ContainerProd, SCAddProduct, SCBiPlusCircle, Product, Valor, AddtoCart } from './styleHome'



export default function HomePage() {

    const { setPath } = useContext(PathContext)

    const [products, setProducts] = useState([]);

    const token = JSON.parse(sessionStorage.getItem("token"));

    const navigateTo = useNavigate();

    setPath('home')
    
    // const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    // };

    // function loadProducts(){
    //     const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`, config);
    //     promise.then(resposta => setProducts = resposta.data)
    //     promise.catch((erro) => alert(erro.response.data));
    //   }

    // useEffect(loadProducts, []);

    return (
        <>
            <Header />
            <ContainerGeral>
                <SideMenu>

                </SideMenu>
                <ContainerProd>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                    <Product>
                        <img src={notebook} alt='' />
                        <h1>Notebook Inspiron 15 3000</h1>
                        <p>11º geração Core i5 8GB Ram ssd 1T</p>
                        <Valor>R$ 2.698,00</Valor>
                        <AddtoCart><h3>Adicionar ao Carrinho</h3></AddtoCart>
                    </Product>

                </ContainerProd>
            </ContainerGeral>

        </>
    )
}
