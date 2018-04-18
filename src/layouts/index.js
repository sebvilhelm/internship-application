import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet';
import styled from 'styled-components';
import theme from '../theme';
import Header from '../components/Header';
import './index.css';

const Wrapper = styled.div`
  ${theme.bgPattern};
  border-top: 5px solid ${theme.primary};
  min-height: 100vh;
  *::selection {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
  *::-moz-selection {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Sebastian is looking for an internship"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'web development, education, internship' },
      ]}
    />
    <Header />
    <main>{children()}</main>
    <footer>Hello from the footer</footer>
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
