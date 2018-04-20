import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import theme from '../../theme';
import Icon from '../../components/Icon';

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

const flexColumn = css`
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  @media (max-width: 40rem) {
    ${props => props.stackOnMobile && flexColumn};
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
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
    height: 100%;
    width: 100%;
    border-bottom: 3px solid ${theme.primary};
  }
  @media (max-width: 40rem) {
    &.active {
      color: ${theme.primary};
      &:before {
        border-bottom: 0;
      }
    }
  }
`;

const StyledNavLink = styled(Link)`
  ${linkCss};

  ${StyledIcon} {
    @media (max-width: 40rem) {
      display: none;
    }
  }
`;

const StyledLink = styled(OutboundLink)`
  ${linkCss};
`;

const navLinks = [
  { title: 'Home', link: '/', iconType: 'home' },
  { title: 'Previous Work', link: '/previous-work', iconType: 'rocket' },
];

const socialLinks = [
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/svnielsen/', iconType: 'linkedin' },
  { title: 'Twitter', link: 'https://twitter.com/VilhelmNielsen', iconType: 'twitter' },
  { title: 'Github', link: 'https://github.com/VilhelmNielsen', iconType: 'github' },
];

const Header = () => (
  <HeaderContainer>
    <FlexHeader>
      <Nav stackOnMobile>
        {navLinks.map(({ link, title, iconType }) => (
          <StyledNavLink key={title} exact activeClassName="active" to={link}>
            <StyledIcon size={20} type={iconType} fill={theme.primary} />
            {title}
          </StyledNavLink>
        ))}
      </Nav>
      <Nav>
        {socialLinks.map(({ link, title, iconType }) => (
          <StyledLink aria-label={title} key={title} target="_blank" title={title} href={link}>
            <StyledIcon size={20} type={iconType} fill={theme.primary} />
          </StyledLink>
        ))}
      </Nav>
    </FlexHeader>
  </HeaderContainer>
);

export default Header;
