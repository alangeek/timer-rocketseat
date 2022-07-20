import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['gray-500']};
  }

  body { 
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  html { 
    font-size: 62.5%;
    scroll-behavior: smooth;
    user-select: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

`