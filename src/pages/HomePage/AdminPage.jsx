import axios from 'axios';
import notebook from './../../../assets/notebook.png'
import { HeaderContainer, MenuContainer, Acess, SCLogOutIcon, SCTitle, Cart, CartIcon, ContainerGeral, ContainerProd, SCAddProduct, SCBiPlusCircle, Product, Valor, AddtoCart, SCFooterAddProduct, SCAddInput, SCFormAdd, } from './styleHome'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Admin() {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigateTo = useNavigate();

    const token = JSON.parse(sessionStorage.getItem("token"));

    function addProduct(e) {
        e.preventDefault();
        const newProd = {
            image: image,
            title: title,
            description: description,
            price: price,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.post(
            `${import.meta.env.VITE_API_URL}/products`,
            newProd,
            config
        );

        promise.then((res) => {
            console.log(res.data);
            setImage('');
            setTitle('');
            setDescription('');
            setPrice('');   
        });
        promise.catch((erro) => alert(erro.response.data));
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
                    <SCAddProduct>
                        <SCFormAdd onSubmit={addProduct}>
                            <SCAddInput
                                name="Image"
                                placeholder="Image URL"
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                            <SCAddInput
                                name="title"
                                placeholder="Title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <SCAddInput
                                name="description"
                                placeholder="Description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <SCAddInput
                                name="price"
                                placeholder="Price"
                                type="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                            <SCFooterAddProduct>
                                <SCBiPlusCircle />
                                <p>Adicionar Produto</p>
                            </SCFooterAddProduct>
                        </SCFormAdd>
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
