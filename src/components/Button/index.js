import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import theme from '../../theme';

const PrimaryButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: ${theme.white};
  padding: 0.5rem 1rem;
  border: 0;
  letter-spacing: 0.1em;
`;

const Button = props => <PrimaryButton {...props}>{props.children}</PrimaryButton>;

export default Button;
