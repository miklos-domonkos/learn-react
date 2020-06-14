import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export const FunctionComponentConst = ({ inputData }) => (
  <>
    <h3>Hello {inputData}</h3>
    <p>{JSON.stringify(this)}</p>
  </>
);

FunctionComponentConst.propTypes = propTypes;
