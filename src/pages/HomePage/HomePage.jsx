import styled from 'styled-components'
import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'
import notebook from './../../../assets/notebook.png'


export default function HomePage() {


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
const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
`
const ContainerProd = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    width: 900px;
`
const Product = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    margin: 5px;
   
    padding: 10px;

    img {
        width: 180px;
        height: 100px;
    }
    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        margin: 10px 0 10px 0;
    }
    p {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 14px;
        color: darkgray;
    }
`
const Valor = styled.div`

    margin: 15px 0 15px 0;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    color: #000000;

`
const AddtoCart = styled.div`
    width: 170px;
    height: 40px;
    background-color: #255566;
    
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    h3 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 15px;
        color: white;
    }
`