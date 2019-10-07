import styled from 'styled-components';


const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.main};
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.main};
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
  padding: 0;
  margin: 0;
`;

const Highlight = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.main};
`;

export {
  Title,
  Subtitle,
  Text,
  Highlight,
  Link,
};
