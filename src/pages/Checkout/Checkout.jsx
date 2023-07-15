import { useContext } from "react"
import PathContext from "../../context/PathContext"
import Header from "../../components/Header"
import styled from 'styled-components'
import notebook from './../../../assets/notebook.png'

export default function Checkout() {

    const { setPath } = useContext(PathContext)

    setPath('checkout')

    return (
        <>
            <Header />
            <PageContainer>
            <ShoppingCartContainer>
            <h1>Informações</h1>
            <hr />
            <Product>
              <ProductInfo>
                <p>NOME DO PESSOA</p>
                <p>email@email.com</p>
                <p>ENTREGA</p>
                <p>Adicionar novo endereço</p>
                <p>Volte as compras</p>
              </ProductInfo>
            </Product>
          </ShoppingCartContainer>
                <Subtotal>
                    <h1>Resumo da Compra</h1> <p>1 Item</p>
                    <img src={notebook} alt="" />
                    <p>Notebook dell 8GB 1TB</p>
                    <p>R$ 2698,00</p><br />
                    <p>Subtotal: R$ 2698,00</p>
                    <p>Frete: A calcular</p>
                    <p>Total: R$ 2698,00</p>
                </Subtotal>
            </PageContainer>

        </>
    )
}

const Subtotal = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 20px;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  h1 {
    font-size: 20px;
  }
  strong {
    font-weight: 600;
  }
  button {
    font-size: 16px;
    border: none;
    background-color: #255566;
    color: white;
    border-radius: 10px;
    height: 30px;
  }
`
const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto';
`

const ShoppingCartContainer = styled.div`
  width: 75%;
  background: #F5F5F5;
  padding: 20px;
  margin-top: 20px;
  h1 {
    font-size: 24px;
  }
  hr {
    color: #F8F8F8;
  }
`

const Product = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  img {
    width: 300px;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  p:nth-child(1) {
    font-size: 20px;
  }
  p:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
  }
  p:nth-child(3) {
    font-size: 15px;
    color: #282828;
  }
`
