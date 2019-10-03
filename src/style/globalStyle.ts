import {
  createGlobalStyle,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export default GlobalStyle;
