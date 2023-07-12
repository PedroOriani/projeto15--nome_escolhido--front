import { useState } from 'react'
import styled from 'styled-components'

export default function SideMenu() {
  const [brand, setBrand] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');

  return (
    <>
      <SideMenuContainer>
            <p>Filtrar por:</p>
            <br />
            <fieldset>
              <legend>Marca:</legend>
              <label for="dell">
                <input type="radio" name="brand"/>
                DELL
              </label>
              <br />
              <label for="Asus">
                <input type="radio" name="brand"/>
                Asus
              </label>
              <br />
              <label for="lenovo">
                <input type="radio" name="brand"/>
                Lenovo
              </label>
              <br />
              <label for="Acer">
                <input type="radio" name="brand"/>
                Acer
              </label>
            </fieldset>
            <br />
            <fieldset>
              <legend>Processador:</legend>
              <label for="i3">
                <input type="radio" name="processor"/>
                Intel Core i3
              </label>
              <br />
              <label for="i5">
                <input type="radio" name="processor"/>
                Intel Core i5
              </label>
              <br />
              <label for="i7">
                <input type="radio" name="processor"/>
                Intel Core i7
              </label>
              <br />
            </fieldset>
            <br />
            <fieldset>
              <legend>Memória RAM:</legend>
              <label for="4">
                <input type="radio" name="ram"/>
                4GB
              </label>
              <br />
              <label for="8">
                <input type="radio" name="ram"/>
                8GB
              </label>
              <br />
              <label for="16">
                <input type="radio" name="ram"/>
                16GB
              </label>
              <br />
            </fieldset>
            <br />
            <fieldset>
              <legend>Armazenamento:</legend>
              <label for="250">
                <input type="radio" name="storage"/>
                250GB
              </label>
              <br />
              <label for="500">
                <input type="radio" name="storage"/>
                500GB
              </label>
              <br />
              <label for="1000">
                <input type="radio" name="storage"/>
                1TB
              </label>
            </fieldset>
            <br />
            <button>Filtrar</button>
      </SideMenuContainer>
    </>
  )
}

const SideMenuContainer = styled.aside`
  position: absolute;
  left: 0;
  height: 100vh;
  width: 200px;
  overflow-y: scroll;
`
