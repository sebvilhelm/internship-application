import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Title, TextIntro, Text, Psst } from '../components/Typography';
import theme from '../theme';

import Layout from '../components/Layout';

const TextContainer = styled.div`
  max-width: ${theme.maxScreenWidth};
  margin: 0 auto;
  background-color: ${theme.white};
  padding: 2rem 1rem 3rem;
  box-shadow: 0 2px 10px hsla(13, 15%, 85%, 0.1), 0 10px 20px 5px hsla(13, 2%, 65%, 0.05);
`;

const CTA = styled(OutboundLink)`
  display: block;
  width: 350px;
  text-align: center;
  margin: 2rem auto;
  background-color: ${theme.primary};
  color: ${theme.white};
  padding: 0.5rem 1rem;
  letter-spacing: 0.1em;
  border-radius: 5px;
`;

const ContactPage = () => (
<Layout>
  <section>
    {/* TODO: HELMET */}
    <Helmet>
      <meta name="description" content="Contact me, please" />
    </Helmet>
    <Title center>Contact Me</Title>
    <TextContainer>
      <TextIntro center>Intrigued? I think talking is the best way to asses anything, so let's talk!</TextIntro>
      <TextIntro center>Send me an email, and let's arrange a meet-up!</TextIntro>
      <CTA href="mailto:seb.vilhelm@gmail.com">seb.vilhelm@gmail.com</CTA>
      <Text fullWidth center>
        <Psst>You can copy the email or just click it.</Psst>
      </Text>
    </TextContainer>
  </section>
</Layout>
);

export default ContactPage;
