import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  height: 150px;
  width: 300px;
  background-color: white;
  border-radius: 4px;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 20px;
  font-family: 'Roboto';
  padding-top: 15px;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
`
export const Input = styled.input`
  height: 35px;
  width: 60%;
  margin-left: 20px;
  border-style: none;
  border: 1px solid #cbd2d9;
`
export const Paragraph = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  margin-left: 30px;
`

export const Button = styled.button`
  background-color: #d946ef;
  height: 35px;
  width: 50px;
  color: white;
  border-color: transparent;
  margin-left: 10px;
  border-radius: 5px;
`
