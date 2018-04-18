import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet';
import styled from 'styled-components';
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const Wrapper = styled.div`
  ${theme.bgPattern};
  border-top: 5px solid ${theme.primary};
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content minmax(60vh, min-content) 1fr;
  *::selection {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
  *::-moz-selection {
    background-color: ${theme.primary};
    color: ${theme.white};
  }

  * {
    ${props => !props.showOutline && 'outline: none'};
  }
`;

class TemplateWrapper extends React.Component {
  state = {
    showOutline: false,
  };
  render() {
    return (
      <Wrapper
        onKeyDown={e => e.keyCode === 9 && this.setState({ showOutline: true })}
        showOutline={this.state.showOutline}
      >
        <Helmet
          title="Sebastian is looking for an internship"
          meta={[
            {
              name: 'description',
              content:
                'I’m a JavaScript developer from Copenhagen studying  Web Development at Københavns Erhvervs Akademi, looking for an internship for the fall 2018',
            },
            { name: 'keywords', content: 'web development, education, internship' },
          ]}
        />
        <Header />
        <main>{this.props.children()}</main>
        <Footer />
      </Wrapper>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
