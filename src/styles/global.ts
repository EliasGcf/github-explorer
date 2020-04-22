import { createGlobalStyle, css } from 'styled-components';

import githubBackground from '../assets/github-background.svg';
import githubBackgroundDark from '../assets/github-background-dark.svg';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
      ${props =>
        props.theme.title === 'dark'
          ? css`
              background: ${props.theme.colors.background}
                url(${githubBackgroundDark}) no-repeat 70% top;
            `
          : css`
              background: ${props.theme.colors.background}
                url(${githubBackground}) no-repeat 70% top;
            `}
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
