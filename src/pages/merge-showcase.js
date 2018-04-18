import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Title, TextIntro } from '../components/Typography';
import theme from '../theme';

const Container = styled.article`
  background-color: ${theme.white};
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
`;

const MergeShowcase = ({ data }) => {
  const { allFile: { edges } } = data;
  return (
    <section>
      <Title style={{ color: theme.primary, textAlign: 'center' }}>Merge CPH</Title>
      <Container>
        <TextIntro>
          As an exam project, I designed a platform for conferences called Merge CPH. The mockups below were made in
          Sketch.
        </TextIntro>
        {edges.map(({ node: { name, childImageSharp: { sizes } } }) => <Img key={name} sizes={sizes} />)}
      </Container>
    </section>
  );
};

// eslint-disable-next-line
export const query = graphql`
  query MergeGalleryQuery {
    allFile(filter: { relativeDirectory: { eq: "merge" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default MergeShowcase;
