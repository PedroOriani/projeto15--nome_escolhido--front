import { useContext } from "react"
import PathContext from "../../context/PathContext"
import Header from "../../components/Header"
import notebook from './../../../assets/notebook.png'
import { PageContainer, InfoContainer, Info, UserInfo, AddAdress, AddPay, Subtotal, SubtotalInformation } from "./styleCheckout"

export default function Checkout() {

  const { setPath } = useContext(PathContext)

  setPath('checkout')



  return (
    <>
      <Header />
      <PageContainer>
        <InfoContainer>
          <h1>Informações</h1>
          <hr />
          <Info>
            <UserInfo>
              <p>Fulando da Silva</p>
              <p>email@email.com</p>
              <h3>ENTREGA</h3>
              <p>Endereço: </p>
              <div>
                <AddAdress><h2>Adicionar novo endereço</h2></AddAdress>
                <AddPay><h2>Salvar e escolher forma de pagamento</h2></AddPay>
              </div>

              <p>Adicionar mais itens</p>
            </UserInfo>
          </Info>
        </InfoContainer>
        <Subtotal>
          <div>
            <h1>Resumo da Compra</h1> <p>1 Item</p>
          </div>
          <div>
            <img src={notebook} alt="" />
            <p>Notebook dell 8GB 1TB</p>
            <p>R$ 2698,00</p>
          </div>
          <hr />
          <SubtotalInformation>
            <p>Subtotal:</p> <p>R$ 2698,00</p>
          </SubtotalInformation>
          <SubtotalInformation>
            <p>Frete:</p> <p>A calcular</p>
          </SubtotalInformation>
          <SubtotalInformation>
            <p>Total:</p> <p>R$ 2698,00</p>
          </SubtotalInformation>
        </Subtotal>
      </PageContainer>

    </>
  )
}
