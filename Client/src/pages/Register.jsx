import React from 'react'
import styled from "styled-components"

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
`

const StyledRegisterContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #313164;
margin-top: 20vh;
//margin-left: 40%;
width: 25rem;
padding: 2rem;
justify-items: center;
border-radius: 10px;
box-shadow: 1px 5px 11px 4px rgba(0,0,0,0.76);
`

const StyledInput = styled.input`
background-color: #313164;
border: none;
border-bottom: 2px solid #0DB8DE;
border-top: 0px;
border-radius: 0px;
font-weight: bold;
outline: 0;
margin-bottom: 2.5rem;
padding-left: 0px;
color: white;
font-size: 1.5rem;
`
const StyledButton = styled.button`
border: none;
padding:10px 65px;
border-radius: 5px;
background-color: inherit;
border: solid 2px #9aea9e;
color: white;
font-size: 1.1rem;
cursor: pointer;
`

export default function Register() {
    return (
        <StyledWrapper>
            <StyledRegisterContainer>
             <div>
                <form action="http://localhost:4000/users/register" method="POST">
                     <StyledInput placeholder='username' name='username'></StyledInput>
                    <StyledInput placeholder='password' name='password'></StyledInput>
                    <StyledButton type="submit">Skapa</StyledButton>
                </form>
            </div>
            </StyledRegisterContainer>
        </StyledWrapper>
    )
}
