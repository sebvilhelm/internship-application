import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Title, SubTitle } from '../components/Typography';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    {/* TODO: HELMET */}
    <Title>NOT FOUND</Title>
    <SubTitle>
      Nothing to see here{' '}
      <span role="img" aria-label="Sad face">
        😢
      </span>
    </SubTitle>
  </Layout>
);

export default NotFoundPage;
