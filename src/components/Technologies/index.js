import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import theme from '../../theme';
import { SectionTitle, H3, H4 } from '../Typography';
import { tech, otherTech } from './data';

const Wrapper = styled.div`
/*   position: relative;
  background-color: ${theme.white};
  padding: 1rem 2rem 4rem; */
`;

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
