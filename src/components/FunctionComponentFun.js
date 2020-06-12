import React from 'react';
export function FunctionComponentFun({ inputData }) {
  return (<>
    <h3>Hello {inputData}</h3>
    <p>{JSON.stringify(this)}</p>
  </>);
}
