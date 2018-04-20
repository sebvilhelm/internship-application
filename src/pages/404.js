import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Title, SubTitle } from '../components/Typography';

const NotFoundPage = () => (
  <div>
    <Title>NOT FOUND</Title>
    <SubTitle>
      Nothing to see here{' '}
      <span role="img" aria-label="Sad face">
        😢
      </span>
    </SubTitle>
  </div>
);

export default NotFoundPage;
