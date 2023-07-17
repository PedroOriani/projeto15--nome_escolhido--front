import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from "react-icons/bi";
import cadastros from '../mocks/cadastros';

export default function SideMenu( { products, setProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');

  function getProductsByCategory(categoryType) {

    setCategory(categoryType)

    if (category === '') {
      let arr = [];
      for (let i = 0; i < cadastros.length; i++) {
        if (cadastros[i].type == categoryType)
          arr.push(cadastros[i]);
      }
      setProducts(arr);
    } else if (category === categoryType) {
      setProducts(cadastros);
      setCategory('')
    } else {
      let arr2 = [];
      for (let i = 0; i < cadastros.length; i++) {
        if (cadastros[i].type == categoryType)
          arr2.push(cadastros[i]);
      }
      setProducts(arr2);
    }
  }

  console.log(products)

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
        <SCButtonCel onClick={() => getProductsByCategory("cellphone")} select={category === "cellphone" }>Celulares</SCButtonCel>
        <SCButtonLap onClick={() => getProductsByCategory("laptop")} select={category === "laptop" }>Notebooks</SCButtonLap>
        <SCButtonTab onClick={() => getProductsByCategory("tablet")} select={category === "tablet" }>Tablets</SCButtonTab>
        <SCButtonSpk onClick={() => getProductsByCategory("speaker")} select={category === "speaker" }>Caixas de som</SCButtonSpk>
        <SCButtonEar onClick={() => getProductsByCategory("earphone")} select={category === "earphone" }>Fones de ouvido</SCButtonEar>
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

const SCButtonCel = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
  height: 40px;
  width: 100%;
  border: none;
  color: ${props => props.select ? 'green' : 'none'};
  font-weight: ${props => props.select ? 'bold' : 'none'};
`
const SCButtonLap = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
  height: 40px;
  width: 100%;
  border: none;
  color: ${props => props.select ? 'green' : 'none'};
  font-weight: ${props => props.select ? 'bold' : 'none'};
`
const SCButtonTab = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
  height: 40px;
  width: 100%;
  border: none;
  color: ${props => props.select ? 'green' : 'none'};
  font-weight: ${props => props.select ? 'bold' : 'none'};
`
const SCButtonSpk = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
  height: 40px;
  width: 100%;
  border: none;
  color: ${props => props.select ? 'green' : 'none'};
  font-weight: ${props => props.select ? 'bold' : 'none'};
`
const SCButtonEar = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
  height: 40px;
  width: 100%;
  border: none;
  color: ${props => props.select ? 'green' : 'none'};
  font-weight: ${props => props.select ? 'bold' : 'none'};
`