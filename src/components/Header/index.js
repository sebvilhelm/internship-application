import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import theme from '../../theme';

const HeaderContainer = styled.header`
  background-color: ${theme.black};
`;

const FlexHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  display: inline-block;
  list-style: none;
`;

const linkCss = css`
  display: block;
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
      <nav>
        <ul>
          {navLinks.map(({ link, title }) => (
            <NavItem key={title}>
              <StyledNavLink exact activeStyle={{ borderBottom: `3px solid ${theme.primary}` }} to={link}>
                {title}
              </StyledNavLink>
            </NavItem>
          ))}
        </ul>
      </nav>
      <ul>
        {socialLinks.map(({ link, title }) => (
          <NavItem key={title}>
            <StyledLink target="_blank" title={title} href={link}>
              {title}
            </StyledLink>
          </NavItem>
        ))}
      </ul>
    </FlexHeader>
  </HeaderContainer>
);

export default Header;
