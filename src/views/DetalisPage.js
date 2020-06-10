import React from 'react';
import DetalisTemplate from 'templates/DetalisTemplate';
import { routes } from 'routes';
import PropsTypes from 'prop-types';

const DetalisPage = ({ match }) => (
  <DetalisTemplate>
    <p>{`is note: ${match.path === routes.note}`}</p>
    <p>{`is twitter: ${match.path === routes.twitter}`}</p>
    <p>{`is article: ${match.path === routes.article}`}</p>
  </DetalisTemplate>
);

DetalisPage.propTypes = {
  match: PropsTypes.oneOfType([PropsTypes.object]).isRequired,
};

export default DetalisPage;
