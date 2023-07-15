import axios from 'axios';
import notebook from './../../../assets/notebook.png'
import { HeaderContainer, MenuContainer, Acess, SCLogOutIcon, SCTitle, Cart, CartIcon, ContainerGeral, ContainerProd, SCAddProduct, SCBiPlusCircle, Product, Valor, AddtoCart } from './styleHome'
import { useNavigate } from 'react-router-dom';


export default function Admin() {


    const navigateTo = useNavigate();

    function addProduct() {

    }

    function efetuarLogout() {

         axios.post(`${import.meta.env.VITE_API_URL}/logout`)
             .then(() => {
                 sessionStorage.clear();
                 navigateTo("/log-in");
               
             })
             .catch(err => console.log(err.response.data));
    }

    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Acess>
                        <SCLogOutIcon onClick={efetuarLogout} />
                        <p><span>Admin User </span></p>

                    </Acess>
                    <SCTitle >DrivenTech</SCTitle>
                    <Cart  >
                        <CartIcon />

                    </Cart>

                </MenuContainer>
            </HeaderContainer>

            <ContainerGeral>

                <ContainerProd>
                    <SCAddProduct onClick={addProduct} >
                        <SCBiPlusCircle />
                        <p>Adicionar Produto</p>
                    </SCAddProduct>
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
