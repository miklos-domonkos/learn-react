import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export function FunctionComponentFun({ inputData }) {
  return (
    <>
      <h3>Hello {inputData}</h3>
      <p>{JSON.stringify(this)}</p>
    </>
  );
}
FunctionComponentFun.propTypes = propTypes;
