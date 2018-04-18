import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import theme from '../../theme';
import { SectionTitle, Description, H3, H4, Psst } from '../Typography';

const Wrapper = styled.div`
/*   position: relative;
  background-color: ${theme.white};
  padding: 1rem 2rem 4rem; */
`;

const tech = [
  {
    title: 'React.js',
    description: () => (
      <Description>
        Awesome, reactive frontend framework for JavaScript. Only cares about rendering the front end, everything else
        is up to you. <strong>Once you go React, you never go back</strong>.
      </Description>
    ),
  },
  {
    title: 'GatsbyJS',
    description: () => (
      <Description>
        Static site generator based on React and the power of GraphQL. Blazingly fast, with a bunch of terrific built-in
        performance features. You bring the data, anywhere from local files to your favourite CMS – like Wordpress or
        Drupal. <Psst>Psssst. this site is made in Gatsby, check out how fast the pages load!</Psst>
      </Description>
    ),
  },
  {
    title: 'GraphQL',
    description: () => (
      <Description>
        APIs on steroids. Only get the content you actually need, when you need it. Deliver you data from any platform
        to any platform, and never add another route to your API again.
      </Description>
    ),
  },
  {
    title: 'Async/Await',
    description: () => (
      <Description>
        Farewell Callback Hell! Asynchronous code that is as easy to read as synchronous code. Promisify everything.
      </Description>
    ),
  },
  {
    title: 'CSS Grid',
    description: () => (
      <Description>
        Finally the power of the responsive web design is unlocked. Goodbye{' '}
        <OutboundLink target="_blank" href="https://css-tricks.com/website-sameness/">
          Website Sameness™
        </OutboundLink>.
      </Description>
    ),
  },
];

const otherTech = ['Redux', 'Node.js', 'Express.js', 'Apollo GraphQL', 'Angular5'];

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  list-style-image: ${props =>
    props.icon === 'heart'
      ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 16' width='24' height='24' fill='#2392a7'%3E%3Cpath d='M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z'/%3E%3C/svg%3E\")"
      : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 16' width='24' height='24' fill='#2392a7'%3E%3Cpath d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z'/%3E%3C/svg%3E\")"};
  list-style-type: square;
`;

const Technologies = () => (
  <Wrapper>
    <SectionTitle>Things I'm into at the moment</SectionTitle>
    <List>
      {tech.map(({ title, description }) => (
        <ListItem icon="heart" key={title}>
          <H4 color={theme.black}>{title}</H4>
          {description()}
        </ListItem>
      ))}
    </List>
    <H3>Other stuff I'm using at the moment</H3>
    <List>
      {otherTech.map(item => (
        <ListItem key={item}>
          <H4 small color={theme.black}>
            {item}
          </H4>
        </ListItem>
      ))}
    </List>
  </Wrapper>
);

export default Technologies;
