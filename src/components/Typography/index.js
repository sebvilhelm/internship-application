import styled from 'styled-components';
import theme from '../../theme';

const centerText = props => props.center && 'text-align: center';

export const Title = styled.h1`
  color: ${props => (props.theme === 'light' ? theme.offWhite : theme.primary)};
  font-weight: 400;
  font-size: 3rem;
  margin: 1rem 0;
  ${centerText};

  strong {
    font-style: normal;
    font-weight: 600;
    font-size: 1.3em;
    color: ${theme.lightPrimary};
  }
  @media (max-width: 40rem) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  color: ${theme.darkPrimary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  margin: 1rem 0 2rem;
  ${centerText};

  @media (max-width: 40rem) {
    font-size: 0.8rem;
  }
`;

export const H1 = styled.h1`
  color: ${props => (props.theme === 'light' ? theme.offWhite : theme.black)};
  font-weight: 400;
  font-size: 2.5rem;
  margin: 1.2rem 0;
  ${centerText};
  strong {
    font-style: normal;
    font-weight: 900;
    font-size: 2.8rem;
    color: ${props => (props.theme === 'light' ? theme.white : theme.black)};
  }

  @media (max-width: 40rem) {
    font-size: 2rem;
  }
`;

export const SectionTitle = H1.withComponent('h2');

export const H2 = styled.h2`
  color: ${theme.black};
  font-weight: 400;
  font-size: 2rem;
  margin: 1rem 0;
  ${centerText};
`;

export const H3 = styled.h3`
  color: ${props => (props.color ? props.color : theme.darkGrey)};
  font-weight: 400;
  font-size: 1.7rem;
  margin: 0.3rem 0 1rem;
  ${centerText};
`;
export const H4 = styled.h4`
  color: ${props => (props.color ? props.color : theme.darkGrey)};
  font-weight: 400;
  font-size: ${props => (props.small ? '1rem' : '1.3rem')};
  margin: 0.3rem 0 1rem;
  ${centerText};
  li > & {
    margin: 0;
  }
`;

export const Description = styled.p`
  color: ${theme.lightGrey};
  font-weight: 300;
  margin: 0 0 1rem;
  a {
    font-weight: 400;
    color: ${theme.primary};
  }
  strong {
    font-weight: 600;
  }
`;

export const Psst = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  opacity: 0.5;
  font-style: italic;
`;

export const Text = styled.p`
  color: ${theme.darkGrey};
  margin: 0.5rem 0;
  ${props => !props.fullWidth && `max-width: 45rem;`};
  font-weight: 300;
  line-height: 1.7;
  ${centerText};
  strong {
    font-weight: 500;
  }
  a {
    font-weight: 400;
    color: ${theme.primary};
  }
`;

export const TextIntro = styled.p`
  color: ${theme.black};
  font-size: 1.4rem;
  margin: 1rem 0;
  font-weight: 300;
  font-style: italic;
  ${centerText};
  a {
    font-weight: 400;
    color: ${theme.primary};
  }

  @media (max-width: 40rem) {
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

// eslint-ignore-next-line
export const UpperTitleDescription = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 800;
  color: ${props =>
    props.type === 'wordpress'
      ? theme.secondary
      : props.type === 'javascript' ? theme.tertiary : props.type === 'nodejs' ? theme.green : theme.primary};
`;
