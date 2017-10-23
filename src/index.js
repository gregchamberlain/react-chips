// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  title: string
};

const MyComponent = ({ title }: Props): React$Element<'h2'> => (
  <h2>{title}</h2>
);

MyComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default MyComponent;