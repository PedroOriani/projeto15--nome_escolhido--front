import styled from "styled-components";
import { BiCart, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 15px;
  height: 120px;
  background-color: #255566;
  h1 {
    font-family: "Montserrat";
    font-size: 30px;
    font-weight: 600;
    color: white;
  }
`;

export const Acess = styled.div`
  display: ${(props) => (props.logged ? "none" : "flex")};
  align-items: center;
  p {
    font-family: "Montserrat";
    font-weight: 400;
    margin-right: 10px;
    margin-left: 20px;
    color: white;
  }
  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 15px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
export const AcessUser = styled.div`
  display: ${(props) => (props.logged ? "flex" : "none")};
  align-items: center;
  p {
    font-family: "Montserrat";
    font-weight: 400;
    margin-right: 10px;
    margin-left: 20px;
    color: white;
  }
  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 15px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  margin-right: 20px;

  a {
    font-family: "Montserrat";
    font-weight: 400;
    margin-left: 10px;
    color: white;
    font-size: 20px;
  }
`;

export const SCTitle = styled.p`
  font-size: 50px;
  font-weight: 600;
  font-family: "Montserrat";

  color: #ffffff;

  margin-right: 400px;

  cursor: pointer;
`;

export const MenuIcon = styled(BiMenu)`
  color: #ffffff;

  width: 30px;
  height: 30px;
`;

export const CartIcon = styled(BiCart)`
  color: #ffffff;

  width: 30px;
  height: 30px;

  display: "flex";
`;

export const SCLogOutIcon = styled(BiLogOutCircle)`
  display: "flex";
  color: #ffffff;

  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const SCAddProduct = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px solid #ffffff;
  padding: 25px;
  border-radius: 14px;
  background-color: #255566;
  margin-bottom: 10px;
  p {
    margin-top: 5px;
    font-size: 25px;
    font-family: "Montserrat";
    color: #ffffff;
  }
`;

export const SCBiPlusCircle = styled(BiPlusCircle)`
  color: #ffffff;

  margin-right: 15px;

  width: 30px;
  height: 30px;
`;

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 50px;
`;
export const ContainerProd = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 1000px;
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin: 15px;

  padding: 10px;

  img {
    width: 180px;
    height: 100px;
  }
  h1 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
  p {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 14px;
    color: darkgray;
  }
`;
export const Valor = styled.div`
  margin: 15px 0 15px 0;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: #000000;
`;
export const AddtoCart = styled.div`
  width: 170px;
  height: 40px;
  background-color: #255566;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  h3 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 15px;
    color: white;
  }
`;

export const SCFooterAddProduct = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;

  border: none;
  background: none;

  cursor: pointer;
`

export const SCAddInput = styled.input`
  width: 100%;
  height: 45px;

  margin-bottom: 10px;

  background-color: none;

  border-radius: 5px;

  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 600;

  padding-left: 10px;
`
export const SCFormAdd = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`