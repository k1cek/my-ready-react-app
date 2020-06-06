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
  children: PropsTypes.element.isRequired,
  ewelina: PropsTypes.oneOf(['note', 'twitter', 'article']),
};

PageSidebar.defaultProps = {
  ewelina: 'note',
};
export default PageSidebar;

// walidacja powyzej
