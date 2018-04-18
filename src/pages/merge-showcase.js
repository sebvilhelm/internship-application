import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Title } from '../components/Typography';

const MergeShowcase = ({ data }) => {
  const { allFile: { edges } } = data;
  return (
    <section>
      <Title>Merge</Title>
      {edges.map(({ node: { childImageSharp: { resolutions } } }) => <Img resolutions={resolutions} />)}
    </section>
  );
};

// eslint-disable-next-line
export const query = graphql`
  query MergeGalleryQuery {
    allFile(filter: { relativeDirectory: { eq: "merge" } }) {
      edges {
        node {
          childImageSharp {
            resolutions(width: 600) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;

export default MergeShowcase;
