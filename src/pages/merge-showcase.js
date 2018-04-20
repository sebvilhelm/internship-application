import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Title, TextIntro } from '../components/Typography';
import theme from '../theme';

const Container = styled.article`
  background-color: ${theme.white};
  width: 100vw;
  max-width: ${theme.maxScreenWidth};
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
`;
const imgBreakpoint = '700px';

const ScrollContainer = styled.div`
  display: flex;
  align-items: flex-end;
  overflow: scroll;
  position: relative;
  mask-image: linear-gradient(90deg, black 80%, transparent);
  @media (max-width: ${imgBreakpoint}) {
    mask-image: none;
    overflow: initial;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledImgContainer = styled.div`
  margin-right: 0.5rem;
  img {
    display: inherit;
  }
  @media (max-width: ${imgBreakpoint}) {
    display: none;
  }
`;

const MobileImgContainer = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  display: none;
  img {
    display: inherit;
  }
  @media (max-width: ${imgBreakpoint}) {
    display: block;
  }
`;

const MergeShowcase = ({ data }) => {
  const { desktopImages, mobileImages } = data;
  return (
    <section>
      <Title style={{ color: theme.primary, textAlign: 'center' }}>Merge CPH</Title>
      <Container>
        <TextIntro>
          As an exam project, I designed a platform for conferences called Merge CPH. The mockups below were made in
          Sketch.
        </TextIntro>
        <ScrollContainer>
          {desktopImages.edges.map(({ node: { name, childImageSharp: { resolutions } } }) => (
            <StyledImgContainer key={`${name}-desktop`}>
              <Img resolutions={resolutions} />
            </StyledImgContainer>
          ))}
          {mobileImages.edges.map(({ node: { name, childImageSharp: { sizes } } }) => (
            <MobileImgContainer key={`${name}-mobile`}>
              <Img sizes={sizes} />
            </MobileImgContainer>
          ))}
        </ScrollContainer>
      </Container>
    </section>
  );
};

// eslint-disable-next-line
export const query = graphql`
  query MergeGalleryQuery {
    desktopImages: allFile(filter: { relativeDirectory: { eq: "merge" } }, sort: { fields: [name] }) {
      edges {
        node {
          name
          childImageSharp {
            resolutions(width: 700) {
              ...GatsbyImageSharpResolutions_withWebp
            }
          }
        }
      }
    }

    mobileImages: allFile(filter: { relativeDirectory: { eq: "merge" } }, sort: { fields: [name] }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;

export default MergeShowcase;
