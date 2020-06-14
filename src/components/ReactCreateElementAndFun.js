import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export function ReactCreateElementAndFun({ inputData }) {
  return React.createElement('h3', null, `Hello ${inputData}`);
}

ReactCreateElementAndFun.propTypes = propTypes;
