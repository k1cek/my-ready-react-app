import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropsTypes from 'prop-types';

const PageSidebar = ({ children, ewelina }) => (
  <>
    <Sidebar pageType={ewelina} />
    {children}
  </>
);

PageSidebar.propTypes = {
  children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.node]).isRequired,
  ewelina: PropsTypes.oneOf(['notes', 'twitters', 'articles']),
};

PageSidebar.defaultProps = {
  ewelina: 'notes',
};
export default PageSidebar;
