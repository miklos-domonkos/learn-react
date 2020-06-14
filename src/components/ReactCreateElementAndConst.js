import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export const ReactCreateElementAndConst = ({ inputData }) => {
  return React.createElement('h3', null, `Hello ${inputData}`);
};

ReactCreateElementAndConst.propTypes = propTypes;
