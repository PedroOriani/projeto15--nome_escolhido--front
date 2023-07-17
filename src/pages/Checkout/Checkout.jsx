import { useContext, useEffect, useState } from "react"
import PathContext from "../../context/PathContext"
import Header from "../../components/Header"
import notebook from './../../../assets/notebook.png'
import { PageContainer, InfoContainer, Info, UserInfo, AddAdress, AddPay, Subtotal, SubtotalInformation, Pay } from "./styleCheckout"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Checkout() {

  const { setPath } = useContext(PathContext)
  const [productsCart, setProdsCart] = useState([]);
  const [address, setAddress] = useState([]);
  const navigateTo = useNavigate();

  let userName = '';
  let userEmail = '';
  let userData = {};
  let selectedPayment = '';

  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    userName = user.name;
    userEmail = user.email;
  }

  setPath('checkout')
  const token = JSON.parse(sessionStorage.getItem("token"));

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

  function addAdress(e) {
    e.preventDefault();
    setAddress(address)

    console.log(userData)


  }

  function saveOrder() {

    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", function () {
      const paymentOptions = document.getElementsByName("payment");

      for (let i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
          selectedPayment = paymentOptions[i].value;
          break;
        }
      }

      if (selectedPayment) {
        console.log("Opção selecionada:", selectedPayment);
      } else {
        alert("Nenhuma opção selecionada");
      }
    });

    if (!token) {
      alert("Faça login!");
      navigateTo("/log-in");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const dataOrder = {
        name: userName,
        email: userEmail,
        address: address,
        itens: { productsCart },
        payment: selectedPayment
      }
      console.log(dataOrder)

      const promise = axios.post(`${import.meta.env.VITE_API_URL}/checkout`, dataOrder, config);
      promise.then((resposta) => {
        console.log(resposta.data);
        alert(resposta.data)
        navigateTo('/')
      });
      promise.catch((erro) => alert(erro.response.data));
    }
  }

  return (
    <>
      <Header />
      <PageContainer>
        <InfoContainer>
          <h1>Informações</h1>
          <hr />
          <Info>
            <UserInfo>
              <p>{userName}</p>
              <p>{userEmail}</p>

              <h3>ENTREGA</h3>
              <p>Endereço: {address} </p>
              <div>
                <form onSubmit={addAdress}>
                  <input
                    name="address"
                    placeholder="Digite aqui"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <AddAdress type="submit" ><h2>Adicionar endereço</h2></AddAdress>
                </form>
              </div>
              <p> Escolher forma de pagamento: </p>
              <Pay>
                <input type="radio" name="payment" value="pix" id="pix-option" />
                <label for="pix-option">Pix</label>

                <input type="radio" name="payment" value="debit" id="debit-option" />
                <label for="debit-option">Débito</label>

                <input type="radio" name="payment" value="credit" id="credit-option" />
                <label for="credit-option">Crédito</label>

                <input type="radio" name="payment" value="boleto" id="boleto-option" />
                <label for="boleto-option">Crédito</label>

                <button id="submit-btn">Escolher</button>
              </Pay>
              <AddPay onClick={saveOrder}><h2>Salvar e finalizar compra</h2></AddPay>

            </UserInfo>
          </Info>
        </InfoContainer>


        <Subtotal>
          <div>
            <h1>Resumo da Compra</h1> <p>{productsCart.length} Itens</p>
          </div>
          {productsCart.map((p) => (
            <div>
              <img src={p.image} alt="" />
              <p>{p.title}</p>
              <p>R$ {p.price}</p>
            </div>
          ))}

          <hr />
          <SubtotalInformation>
            <p>Subtotal:</p> <p>R$ {subTotal.toFixed(2)}</p>
          </SubtotalInformation>
          <SubtotalInformation>
            <p>Frete:</p> <p>A calcular</p>
          </SubtotalInformation>
          <SubtotalInformation>
            <p>Total:</p> <p>R$ {subTotal.toFixed(2)}</p>
          </SubtotalInformation>
        </Subtotal>
      </PageContainer>

    </>
  )
}
