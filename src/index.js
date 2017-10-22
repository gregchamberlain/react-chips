import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ title }) => (
  <h2>{title}</h2>
);

MyComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default MyComponent;