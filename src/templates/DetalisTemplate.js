import React from 'react';
import { Link } from 'react-router-dom';
import PageSidebar from 'templates/PageSidebar';
import PropTypes from 'prop-types';

const DetalisTemplate = ({ children }) => (
  <PageSidebar>
    {children}
    <Link to="/">go back</Link>
  </PageSidebar>
);

DetalisTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired, // tablica obiektów
};

export default DetalisTemplate;
