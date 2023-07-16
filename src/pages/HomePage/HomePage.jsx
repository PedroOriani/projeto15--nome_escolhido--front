import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import notebook from "./../../../assets/notebook.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  HeaderContainer,
  MenuContainer,
  Acess,
  SCLogOutIcon,
  SCTitle,
  Cart,
  CartIcon,
  ContainerGeral,
  ContainerProd,
  SCAddProduct,
  SCBiPlusCircle,
  Product,
  Valor,
  AddtoCart,
} from "./styleHome";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const navigateTo = useNavigate();

  function loadProducts() {
    const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`);
    promise.then((resposta) => {
      setProducts(resposta.data);
    });
    promise.catch((erro) => alert(erro.response.data));
  }

  useEffect(loadProducts, []);

  function addCart(image, title, description, price) {
    if (!token) {
      alert("Faça login!");
      navigateTo("/log-in");
    } else {
      const newProdCart = {
        image: image,
        title: title,
        description: description,
        price: price,
      };

      console.log(token);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.post(
        `${import.meta.env.VITE_API_URL}/addToCart`,
        newProdCart,
        config
      );

      promise.then((res) => {
        console.log(res.data);
        alert(res.data);
      });
      promise.catch((erro) => alert(erro.response.data));
    }
  }

  return (
    <>
      <Header />
      <ContainerGeral>
        <SideMenu></SideMenu>
        <ContainerProd>
          {products.map((prod, i) => (
            <Product key={i}>
              <img src={prod.image} alt="" />
              <h1>{prod.title}</h1>
              <p>{prod.description}</p>
              <Valor>R$ {prod.price}</Valor>
              <AddtoCart
                onClick={() =>
                  addCart(prod.image, prod.title, prod.description, prod.price)
                }
              >
                <h3>Adicionar ao Carrinho</h3>
              </AddtoCart>
            </Product>
          ))}
        </ContainerProd>
      </ContainerGeral>
    </>
  );
}
