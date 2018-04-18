import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import theme from '../theme';
import { Title, SubTitle, Text, TextIntro } from '../components/Typography';
import Technologies from '../components/Technologies';

const PortraitWrapper = styled.div`
  position: relative;
  background-color: hsla(13, 0%, 65%, 0.5);
`;
const PortraitContainer = styled.div`
  max-width: ${theme.maxScreenWidth};
  margin: 0 auto;
`;

const TextContainer = styled.article`
  position: relative;
  width: 100%;
  max-width: 43rem;
  background-color: ${theme.white};
  padding: 1rem 2rem 4rem;
  margin: -3rem auto 0;
  box-shadow: 0 2px 10px hsla(13, 15%, 85%, 0.1), 0 10px 20px 5px hsla(13, 2%, 65%, 0.05);
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const IndexPage = ({ data }) => (
  <section>
    <PortraitWrapper>
      <TitleContainer>
        <Title theme="light" style={{ textAlign: 'center' }}>
          My name is <strong>Sebastian</strong>
        </Title>
        <SubTitle theme="light" style={{ textAlign: 'center' }}>
          I’m looking for a web development internship for the fall
        </SubTitle>
      </TitleContainer>
      <PortraitContainer>
        <Img sizes={data.file.childImageSharp.sizes} />
      </PortraitContainer>
    </PortraitWrapper>
    <TextContainer>
      <TextIntro>
        I’m a JavaScript Developer from Copenhagen, currently studying a BA in Web Development at{' '}
        <OutboundLink target="_blank" href="https://kea.dk/en/programmes/top-up-bachelor-degree/web-development">
          Københavns Erhvervs Akademi
        </OutboundLink>.
      </TextIntro>
      <Text>
        I am currently looking for an internship for the period <strong>August 20th</strong> till{' '}
        <strong>October 26th</strong> (10 weeks), specifically working on JavaScript applications using{' '}
        <strong>React</strong> or a similar framework on the front end. I've spend the last year studying Web
        Development, self-studying <em>a lot</em> of JavaScript technologies and working as a Developer at{' '}
        <OutboundLink target="_blank" href="https://frankly.dk/">
          Frankly
        </OutboundLink>
        , primarily working with <strong>Wordpress</strong>.
      </Text>
      <Text>
        <Link to="/previous-work">You can check out some of the stuff I've worked on over here →</Link>
      </Text>
      <Text>
        Before that I've completed an AP in Multimedia Design, also at KEA. I've been coding for 3 years, but my
        skill-set is well beyond that. I love to learn, and as such, I try to keep my knowledge up to date and cutting
        edge, which is why I spend a lot of time reading blogs and Github repositories, watching talks, and trying out
        technologies, npm packages, databases and CMS'.
      </Text>
      <Technologies />
    </TextContainer>
  </section>
);
// eslint-disable-next-line no-undef
export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "portrait_me.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1220, maxHeight: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default IndexPage;
