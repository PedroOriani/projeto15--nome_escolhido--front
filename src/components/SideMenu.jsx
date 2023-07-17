import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from "react-icons/bi";

export default function SideMenu( { products, setProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  
  function getProductsByCategory(categoryType) {
    let arr = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].type == categoryType)
        arr.push(products[i]);
    }
    setProducts(arr);
  } 

  function filterProducts(filterType) {
    let arr = [...products];
    switch (filterType) {
      case ('maior'):
        arr.sort((a,b) => a.price - b.price);
        break
      case ('menor'):
        arr.sort((a,b) => b.price - a.price);
        break
      case ('vendas'):
        arr.sort((a, b) =>  b.sales - a.sales);
        break
      default:
        console.log('erro');
    }
    setProducts(arr);
  }
 
  return (
    <>
      <SideMenuLeft>
        <div>Filtrar por Categorias: </div>
        <button onClick={() => getProductsByCategory("cellphone")}>Celulares</button>
        <button onClick={() => getProductsByCategory("laptop")}>Notebooks</button>
        <button onClick={() => getProductsByCategory("tablet")}>Tablets</button>
        <button onClick={() => getProductsByCategory("speaker")}>Caixas de som</button>
        <button onClick={() => getProductsByCategory("earphone")}>Fones de ouvido</button>
      </SideMenuLeft>
      <SideMenuRight>
        <button onClick={() => setIsOpen(!isOpen)}>Ordenar por <BiChevronDown/> </button>
        {isOpen &&
        <FilterProducts>
          <li onClick={() => filterProducts("menor")}>Preço: maior - menor</li>
          <li onClick={() => filterProducts("maior")}>Preço: menor - maior</li>
          <li onClick={() => filterProducts("vendas")}>Mais vendidos</li>
        </FilterProducts>
        }
      </SideMenuRight>
    </>
  )
}

const SideMenuLeft = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 1px;
  z-index: 2;
  left: 0;
  margin-top: 20px;
  margin-left: 20px;
  width: 200px;
  min-height: 100vh;
  font-family: 'Roboto';
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #255566;
    height: 40px;
    width: 100%;
  }
  button {
    font-family: 'Roboto';
    cursor: pointer;
    height: 40px;
    width: 100%;
    border: none;
  }
  @media (max-width: 1200px) {
    visibility: hidden;
  }
`
const SideMenuRight = styled.aside`
  position: absolute;
  display: flex;
  margin-top: 20px;
  width: 200px;
  right: 0;
  button {
    font-size: 18px;
    cursor: pointer;
    background: #255566;
    color: white;
    height: 35px;
    width: 130px;
    display: flex;
    align-items: center;
    border: none;
  }
  @media (max-width: 1200px) {
    visibility: hidden;
  }
`

const FilterProducts = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  font-family: 'Roboto';
  li {
    cursor: pointer;
    font-size: 16px;
    list-style: none;
  }
`