import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Helmet from 'react-helmet';
import { Title, UpperTitleDescription, H2, H3, Text, TextIntro, Psst } from '../components/Typography';
import theme from '../theme';
import portfolio from '../data/portfolio';

const GridContainer = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
  grid-gap: 1px;
  padding: 0 1rem;
  max-width: 60rem;
  margin: 0 auto;
`;

const Card = styled.li`
  position: relative;
  background: white;
  padding: 1rem 2rem 2rem;
  list-style: none;
`;

const Card2 = styled.li`
  list-style: none;
  position: relative;
  background: white;
  padding: 1rem 2rem 2rem;
  border-radius: 0.4rem 0.4rem 0 0;
  overflow: hidden;
  box-shadow: 0 2px 5px hsla(13, 15%, 85%, 0.1), 0 10px 10px 5px hsla(13, 2%, 65%, 0.05);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    border-top: 0.4rem solid rgb(35, 146, 167);
  }
`;

const CardTitleWrapper = styled.div`
  line-height: 1.2;
`;

const TagList = styled.ul`
  display: flex;
  list-style: none;
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
              <UpperTitleDescription>HAng on</UpperTitleDescription>
              <H2 style={{ marginTop: 0 }}>Real quick...</H2>
            </CardTitleWrapper>
            <TextIntro>
              This is a selection of some of the things I've worked on. Unfortunately I'm not able to share code from my
              previous job, so this is mostly a showcase of my work experience. I haven't been able to do any public
              React work, so let's talk, so I can showcase that I actually know that stuff too{' '}
              <Psst>(This site is built on React and GatsbyJS, you know)</Psst>
            </TextIntro>

            <H3 style={{ marginBottom: 0 }}>Filters:</H3>
            <TagList>
              {types.map(type => (
                <li key={type.filter}>
                  <button onClick={() => this.filterList(type.filter)}>{type.name}</button>
                </li>
              ))}
            </TagList>
          </Card>
          {items.map(card => (
            <Card key={card.title}>
              <CardTitleWrapper>
                <UpperTitleDescription type={card.type}>{card.type}</UpperTitleDescription>
                <H2 style={{ marginTop: 0 }}>{card.title}</H2>
              </CardTitleWrapper>
              <Text>{card.text}</Text>
              <Text>
                <OutboundLink href={card.link} target="_blank">
                  {card.linkText} →
                </OutboundLink>
              </Text>
            </Card>
          ))}
        </GridContainer>
      </section>
    );
  }
}

export default PreviousWork;
