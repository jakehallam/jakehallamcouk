import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

const Visibility = ({ children }) => (
  <VisibilitySensor partialVisibility>
    {({ isVisible }) => React.cloneElement(children, {
      isVisible,
    })}
  </VisibilitySensor>
);

Visibility.propTypes = {
  children: PropTypes.element,
};

Visibility.defaultProps = {
  children: null,
};

export default Visibility;
