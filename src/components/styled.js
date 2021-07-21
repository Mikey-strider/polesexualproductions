import styled, { createGlobalStyle } from "styled-components"

export const MainWrapper = styled.div`
  display: flex;
  flex-Direction: row;
`

export const BaseWrapper = styled.div`
  display: flex;
  flex-Direction: column;
  background-color: #222;
`

export const PolesexualPage = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  background-color: red;
`

export const CocktailgatePage = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  background-color: green;
`

export const PowerPage = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  background-color: blue;
`

export const DivasLandingPage = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  background-color: orange;
`

export const GlobalStyle = createGlobalStyle`
body {
  width: 1200px;
  margin: auto;
}
`