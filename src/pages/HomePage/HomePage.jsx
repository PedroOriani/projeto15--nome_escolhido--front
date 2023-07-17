import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
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
import PathContext from "../../context/PathContext";
import { useContext } from "react";
import cadastros from "../../mocks/cadastros";

export default function HomePage({ products, setProducts }) {

  const { setPath } = useContext(PathContext);

  setPath("home");

  const token = JSON.parse(sessionStorage.getItem("token"));

  const navigateTo = useNavigate();

  useEffect(() => {
    let prodOrdem = cadastros.sort((a, b) => a.title - b.title);
    setProducts(prodOrdem);
  }, []);

  /*function loadProducts() {
      const promise = axios.get(`${import.meta.env.VITE_API_URL}/products`);
      promise.then((resposta) => {
        setProducts(resposta.data);
      });
      promise.catch((erro) => alert(erro.response.data));
    }
  
    useEffect(loadProducts, []);
  */

  function addCart(prod) {
    console.log(prod)
    if (!token) {
      alert("Faça login!");
      navigateTo("/log-in");
    } else {
      const newProdCart = prod;

      const promise = axios.post(`${import.meta.env.VITE_API_URL}/addToCart`, newProdCart, {
        headers:
          { Authorization: `Bearer ${token}` }
      });

      promise.then((res) => {
        console.log(res.data);
        alert("Produto adicionado ao carrinho");
      });
      promise.catch((erro) => alert(erro.response.data));
    }
  }

  return (
    <>
      <Header />
      <ContainerGeral>
        <SideMenu products={products} setProducts={setProducts} />
        <ContainerProd>
          {products.map((prod, i) => (
            <Product key={i}>
              <img src={prod.image} alt={prod.title} />
              <h1>{prod.title}</h1>
              <p>{prod.description}</p>
              <Valor>R$ {prod.price}</Valor>
              <AddtoCart
                onClick={() => addCart(prod)}
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
