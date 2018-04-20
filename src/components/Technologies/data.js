import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Description, Psst } from '../Typography';

export const tech = [
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

export const otherTech = ['Redux', 'Node.js', 'Express.js', 'Apollo GraphQL', 'Angular 5'];
