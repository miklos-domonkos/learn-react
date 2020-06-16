import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

const ReactFunctionMemo = ({ inputData }) => {
  console.log(`render FunctionComponentMemo with: ${inputData}`);
  return (
    <>
      <h3>Hello {inputData}</h3>
      <p>{JSON.stringify(this)}</p>
    </>
  );
};

export default React.memo(ReactFunctionMemo);

ReactFunctionMemo.propTypes = propTypes;
