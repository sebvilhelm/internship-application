import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

import theme from '../../theme';

const FooterWrapper = styled.footer`
  background-color: ${theme.black};
  color: ${theme.lightGrey};
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
`;

const MaxWidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = () => (
  <FooterWrapper>
    <MaxWidth>I think we should talk! You can send me an email or give me a call!</MaxWidth>
  </FooterWrapper>
);

export default Footer;
