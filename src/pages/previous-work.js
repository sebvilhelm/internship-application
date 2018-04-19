import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Link from 'gatsby-link';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Helmet from 'react-helmet';
import { Title, UpperTitleDescription, H2, H3, Text, TextIntro, Psst } from '../components/Typography';
import Button from '../components/Button';
import theme from '../theme';
import portfolio from '../data/portfolio';

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 1px;
  padding: 0 1rem;
  max-width: ${theme.maxScreenWidth};
  margin: 0 auto;
`;

const Card = styled.li`
  position: relative;
  background: white;
  padding: 1rem 2rem 2rem;
  list-style: none;
  ${props => props.showBorder && `border-left: 3px solid transparent`};
  border-color: ${props =>
    props.type === 'wordpress'
      ? theme.secondary
      : props.type === 'javascript' ? theme.tertiary : props.type === 'nodejs' ? theme.green : theme.primary};
`;

const CardTitleWrapper = styled.div`
  line-height: 1.2;
`;

const TagList = styled.ul`
  display: flex;
  list-style: none;
`;

const TagItem = styled.li`
  ${props => props.active && `border-bottom: 2px solid ${theme.primary}`};
  margin: 0.5rem 1rem 0.5rem 0;
`;

class PreviousWork extends React.Component {
  state = {
    filter: null,
  };

  filterList = type => {
    this.setState({ filter: type });
  };

  render() {
    const items = this.state.filter ? portfolio.filter(item => item.type === this.state.filter) : portfolio;
    const types = [
      { filter: null, name: 'Show All' },
      { filter: 'wordpress', name: 'Wordpress' },
      { filter: 'javascript', name: 'JavaScript' },
      { filter: 'nodejs', name: 'Node.js' },
      { filter: 'react', name: 'React' },
    ];
    return (
      <section>
        <Helmet
          title="Stuff Sebastian has previously worked on"
          meta={[
            { name: 'description', content: "Here is a selection of stuff that I've worked on, and that I can show" },
          ]}
        />
        <Title style={{ color: theme.primary, textAlign: 'center' }}>Stuff I've worked on</Title>
        <GridContainer>
          <Card>
            <CardTitleWrapper>
              <UpperTitleDescription>Hang on</UpperTitleDescription>
              <H2 style={{ marginTop: 0 }}>Real quick...</H2>
            </CardTitleWrapper>
            <TextIntro>
              This is a selection of some of the things I've worked on. Unfortunately I'm not able to share code from my
              previous job, so this is mostly a showcase of my work experience. I haven't been able to do any public
              React work, so let's talk, so I can showcase that I actually know that stuff too{' '}
              <Psst>(This site is built on React and GatsbyJS, you know)</Psst>
            </TextIntro>

            <H3 style={{ marginBottom: 0 }}>Filter by type:</H3>
            <TagList>
              {types.map(type => (
                <TagItem active={type.filter === this.state.filter} key={type.filter}>
                  <Button type="small" onClick={() => this.filterList(type.filter)}>
                    {type.name}
                  </Button>
                </TagItem>
              ))}
            </TagList>
          </Card>
          {items.map(({ type, link, text, title, linkText, linkType }) => {
            const LinkComponent =
              linkType === 'internal' ? (
                <Link to={link}>{linkText} →</Link>
              ) : (
                <OutboundLink href={link} target="_blank">
                  {linkText} →
                </OutboundLink>
              );
            return (
              <Card showBorder="true" type={type} key={title}>
                <CardTitleWrapper>
                  <UpperTitleDescription type={type}>{type}</UpperTitleDescription>
                  <H2 style={{ marginTop: 0 }}>{title}</H2>
                </CardTitleWrapper>
                <Text>{text}</Text>
                <Text>{LinkComponent}</Text>
              </Card>
            );
          })}
        </GridContainer>
      </section>
    );
  }
}

export default PreviousWork;
