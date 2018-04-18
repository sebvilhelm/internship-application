import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import theme from '../../theme';

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${theme.black};
`;

const FlexHeader = styled.div`
  max-width: ${theme.maxScreenWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 40rem) {
    flex-direction: column;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const linkCss = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  color: ${theme.offWhite};
  &:active {
    color: white;
  }
  &:hover,
  &:focus {
    color: ${theme.primary};
  }

  &.active:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    border-bottom: 3px solid ${theme.primary};
  }
`;

const StyledNavLink = styled(Link)`
  ${linkCss};
`;

const StyledLink = styled(OutboundLink)`
  ${linkCss};
`;

const navLinks = [{ title: 'Home', link: '/' }, { title: 'Previous Work', link: '/previous-work' }];

const socialLinks = [
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/svnielsen/' },
  { title: 'Twitter', link: 'https://twitter.com/VilhelmNielsen' },
  { title: 'Github', link: 'https://github.com/VilhelmNielsen' },
];

const Header = () => (
  <HeaderContainer>
    <FlexHeader>
      <Nav>
        {navLinks.map(({ link, title }) => (
          <StyledNavLink key={title} exact activeClassName="active" to={link}>
            {title}
          </StyledNavLink>
        ))}
      </Nav>
      <Nav>
        {socialLinks.map(({ link, title }) => (
          <StyledLink key={title} target="_blank" title={title} href={link}>
            {title}
          </StyledLink>
        ))}
      </Nav>
    </FlexHeader>
  </HeaderContainer>
);

export default Header;
