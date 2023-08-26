import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;
  }

  body {
    background-color: #ff6b6b; /* Color rosa coral */
    font-family: Arial, sans-serif;
    color: #ffffff; /* Texto en blanco */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Centrado vertical */
    margin: 0;
  }

  /* Resto de los estilos de base aquí */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
