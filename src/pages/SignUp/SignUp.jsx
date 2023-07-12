import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../components/Logo'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function registerUser(e) {
        e.preventDefault()
        const body = {
            name,
            email,
            password
        }
        console.log(body)
    }

    return (
        <>
            <Logo />
            <FormContainer>
                <form onSubmit={registerUser}>
                    <input
                        name="name"
                        placeholder='Nome'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
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
                    <button type='submit'>Cadastrar</button>
                </form>
                <Link to={'/'}>
                    <p>Já tem uma conta? Acesse aqui!</p>
                </Link>

            </FormContainer>
        </>
    )
}


const FormContainer = styled.section`
    height: 100vh;
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