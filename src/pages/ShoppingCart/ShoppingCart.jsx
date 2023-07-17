import styled from "styled-components";
import Header from "../../components/Header";
import notebook from "./../../../assets/notebook.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import PathContext from "../../context/PathContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShoppingCart() {
  const { setPath } = useContext(PathContext);
  const [productsCart, setProdsCart] = useState([]);
  // const [subTotal, setSubTotal] = useState(null);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const navigateTo = useNavigate();

  setPath("cart");

  useEffect(() => {
    if (!token) {
      alert("Faça login!");
      navigateTo("/log-in");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const promise = axios.get(
        `${import.meta.env.VITE_API_URL}/productsCart`,
        config
      );

      promise.then((res) => {
        setProdsCart(res.data.productsCart);       
      });
      promise.catch((err) => alert(err.response.data));
    }
  }, []);


  let subTotal = 0;

    productsCart.map((p) => {
       subTotal = (subTotal + parseFloat(p.price))
    })
    
  return (
    <>
      <Header />
      <PageContainer>
        <ShoppingCartContainer>
          <h1>Carrinho</h1>
          <hr />
          {productsCart.map((prod, i) => (
            <Product key={i}>
              <img src={prod.image} />
              <ProductInfo>
                <p>{prod.title}</p>
                <p>R${prod.price}</p>
                <p>{prod.description}</p>
              </ProductInfo>
            </Product>
          ))}
        </ShoppingCartContainer>
        <Subtotal>
          <h1>
            Subtotal: <strong>R$ {subTotal.toFixed(2)}</strong>
          </h1>
          <button onClick={() => navigateTo("/checkout")}>Finalizar pedido</button>
        </Subtotal>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Roboto";
`;

const ShoppingCartContainer = styled.div`
  width: 75%;
  background: #f5f5f5;
  padding: 20px;
  margin-top: 20px;
  h1 {
    font-size: 24px;
  }
  hr {
    color: #f8f8f8;
  }
`;

const Product = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  img {
    width: 60px;
  }
`;

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
`;

const Subtotal = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 20px;
  background: #f5f5f5;
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
`;
