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
  background-color: red;
`

export const CocktailgatePage = styled.div`
  background-color: green;
`

export const PowerPage = styled.div`
  background-color: blue;
`

export const DivasLandingPage = styled.div`
  background-color: orange;
`

export const GlobalStyle = createGlobalStyle`
body {
  width: 1200px;
  margin: auto;
}
`