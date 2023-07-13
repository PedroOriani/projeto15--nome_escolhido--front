import { useState } from "react";
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigateTo = useNavigate();

    function loginUser(e) {
        e.preventDefault();

        const body = {
            email,
            password
        }
        
        const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
        promise.then(resposta => {
            sessionStorage.setItem('token', JSON.stringify(resposta.data.token));
            sessionStorage.setItem('user', JSON.stringify(resposta.data.user));
            navigateTo('/')
        })
        promise.catch((erro) => alert(erro.response.data))
    }
    return (
        <>
            <Header />
            <FormContainer>
                <form onSubmit={loginUser}>
                    <input
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        name="password"
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type='submit'>Login</button>
                    <Link to={'/register'}>
                        <p>Primeira vez? Realize seu cadastro aqui!</p>
                    </Link>
                </form>
            </FormContainer>
        </>

    )
}


const FormContainer = styled.section`
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #255566;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: calc(100% - 30px);
        padding: 12px;
        margin-bottom: 15px;
    }
    input {
        font-family: 'Roboto';
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    p {
        font-family: 'Roboto';
        font-weight: 500;
        color: #255566;   
    }
    a {
        text-decoration: none;
    }
`