import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown } from "react-icons/bi";

export default function SideMenu() {
  const [brand, setBrand] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function test() {
    console.log(brand);
    console.log(processor);
    console.log(ram);
  }
  
  return (
    <>
      <SideMenuLeft>
            <h1>Filtrar por:</h1>
            <br />
            <fieldset>
              <legend>Marca:</legend>
              <label for="dell">
                <input type="radio" name="brand" onChange={() => setBrand('dell')}/>
                DELL
              </label>
              <br />
              <label for="asus">
                <input type="radio" name="brand" onChange={() => setBrand('asus')}/>
                Asus
              </label>
              <br />
              <label for="lenovo">
                <input type="radio" name="brand" onChange={() => setBrand('lenovo')}/>
                Lenovo
              </label>
              <br />
              <label for="acer">
                <input type="radio" name="brand" onChange={() => setBrand('acer')}/>
                Acer
              </label>
            </fieldset>
            <br />
            <fieldset>
              <legend>Processador:</legend>
              <label for="i3">
                <input type="radio" name="processor" onChange={() => setProcessor('i3')}/>
                Intel Core i3
              </label>
              <br />
              <label for="i5">
                <input type="radio" name="processor" onChange={() => setProcessor('i5')}/>
                Intel Core i5
              </label>
              <br />
              <label for="i7">
                <input type="radio" name="processor" onChange={() => setProcessor('i7')}/>
                Intel Core i7
              </label>
              <br />
            </fieldset>
            <br />
            <fieldset>
              <legend>Memória RAM:</legend>
              <label for="4">
                <input type="radio" name="ram" onChange={() => setRam('4')}/>
                4GB
              </label>
              <br />
              <label for="8">
                <input type="radio" name="ram" onChange={() => setRam('8')}/>
                8GB
              </label>
              <br />
              <label for="16">
                <input type="radio" name="ram" onChange={() => setRam('16')}/>
                16GB
              </label>
              <br />
            </fieldset>
            <br />
            <fieldset>
              <legend>Armazenamento:</legend>
              <label for="250">
                <input type="radio" name="storage" onChange={() => setStorage('250')}/>
                250GB
              </label>
              <br />
              <label for="500">
                <input type="radio" name="storage" onChange={() => setStorage('500')}/>
                500GB
              </label>
              <br />
              <label for="1000">
                <input type="radio" name="storage" onChange={() => setStorage('1000')}/>
                1TB
              </label>
            </fieldset>
            <br />
            <button onClick={test}>Filtrar</button>
      </SideMenuLeft>
      <SideMenuRight>
        <button onClick={() => setIsOpen(!isOpen)}>Ordenar por <BiChevronDown/> </button>
        {isOpen &&
        <FilterProducts>
          <li>Preço: maior - menor</li>
          <li>Preço: menor - maior</li>
          <li>Mais vendidos</li>
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
  z-index: 2;
  left: 0;
  margin-top: 20px;
  margin-left: 20px;
  width: 200px;
  min-height: 100vh;
  font-family: 'Roboto';
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  button {
    background: #255566;
    color: white;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    border: none;
  }
  @media (max-width: 1025px) {
    visibility: hidden;
  }
`
const SideMenuRight = styled.aside`
  position: absolute;
  display: flex;
  margin-top: 20px;
  width: 150px;
  right: 0;
  button {
    cursor: pointer;
    background: #255566;
    color: white;
    height: 35px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: none;
  }
  @media (max-width: 1025px) {
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
    list-style: none;
  }
`