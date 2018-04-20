import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import theme from '../../theme';

const FooterWrapper = styled.footer`
  background-color: ${theme.black};
  color: ${theme.darkPrimary};
  text-align: center;
  margin-top: 2rem;
  padding: 2rem 1rem;

  a {
    color: inherit;
    color: ${theme.primary};
  }
`;

const MaxWidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = () => (
  <FooterWrapper>
    <MaxWidth>
      I think we should talk! You can send me an email{' '}
      <OutboundLink href="mailto:seb.vilhelm@gmail.com">by clicking here</OutboundLink>!
    </MaxWidth>
  </FooterWrapper>
);

export default Footer;
