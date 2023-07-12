import styled from 'styled-components'

export default function Logo() {
    return (
        <>
            <LogoContainer>
                <h1>DrivenTech</h1>
            </LogoContainer>
        </>

    )
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background-color: #255566;
    h1 {
        font-family: 'Montserrat';
        font-size: 30px;
        font-weight: 600;
        color: white
    }
   
`