import styled from 'styled-components'


export const Subtotal = styled.div`
  width: 35%;
  height: 100%;
  margin-top: 20px;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
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
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 70px;
    height: 70px;
  }
`
export const SubtotalInformation = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto';
`

export const InfoContainer = styled.div`
  width: 45%;
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

export const Info = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
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
  h3 {
    margin-top: 15px;
    font-style: italic;
  }
 
  div {
    display: flex;
    
  }
  form {
    display: flex;
  }
`
export const AddAdress = styled.button`
    width: 40%;
    height: 40px;
    background-color:white;
    
    
    display: flex;
    justify-content: center;
    align-items: center;

    /* border-radius: 20px; */

    button {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 15px;
        color: black;
    }
`
export const AddPay = styled.button`
    width: 40%;
    height: 40px;
    background-color: green;
    
    
    display: flex;
    justify-content: center;
    align-items: center;

    /* border-radius: 20px; */

    h2 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 15px;
        color: white;
    }
`

export const Pay = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  button {
    width: 140px;
  }
  

`