import styled from 'styled-components'
import Header from '../../components/Header'
import notebook from './../../../assets/notebook.png'
import { useEffect } from 'react';
import { useContext } from 'react';
import PathContext from '../../context/PathContext';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart(){

  const { setPath } = useContext(PathContext)

  const navigateTo = useNavigate();

  setPath('cart')

    /*
    useEffect(() => {
        if (!token) {
          navigateTo('/log-in');
        }
      }, []);
      */
  
  function checkout(){
    navigateTo('/checkout')
  }

    return(
        <>
        <Header />
        <PageContainer>
          <ShoppingCartContainer>
            <h1>Carrinho</h1>
            <hr />
            <Product>
              <img src={notebook} />
              <ProductInfo>
                <p>NOME DO PRODUTO</p>
                <p>R$10,00</p>
                <p>DESCRIÇAO DO PRODUTO</p>
              </ProductInfo>
            </Product>
          </ShoppingCartContainer>
          <Subtotal>
            <h1>Subtotal: <strong>R$10,00</strong></h1>
            <button onClick={checkout}>Finalizar pedido</button>
          </Subtotal>
        </PageContainer>
        </>
    )
}

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
