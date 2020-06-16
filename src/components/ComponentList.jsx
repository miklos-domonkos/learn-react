import React, { useState } from 'react';
import Toggle from './Toggle';
import { FunctionComponentConst } from './FunctionComponentConst';
import { FunctionComponentFun } from './FunctionComponentFun';
import ReactFunctionMemo from './ReactFunctionMemo';
import { ReactComponent } from './ReactComponent';
import { ReactPureComponent } from './ReactPureComponent';
import { ReactCreateElementAndFun } from './ReactCreateElementAndFun';
import { ReactCreateElementAndConst } from './ReactCreateElementAndConst';
import { useIntervalWhitWrappedCallback, RenderLogger } from '../Utils';

var man = { name: 'Jack' };

const FunctionComponentFunBind = FunctionComponentFun.bind(man);
const FunctionComponentConstBind = FunctionComponentConst.bind(man);
// like Pure Component
const ReactComponentWithMemo = React.memo(ReactComponent);
// HOC example
const ReactComponentWithRenderLogger = RenderLogger(ReactComponent);

const INTERVAL = 5000;

const ComponentList = () => {
  const [counter, setCounter] = useState(0);
  const [isIncrement, setIncrement] = useState(true);

  const [, setTriggerCounter] = useState(0);

  useIntervalWhitWrappedCallback(
    () => setCounter((counter) => counter + (isIncrement ? 1 : 0)),
    INTERVAL
  );

  //trigger render this -> all child is re-rendered except pure components with same props
  useIntervalWhitWrappedCallback(
    () => setTriggerCounter((counter) => counter + 1),
    INTERVAL
  );

  console.log('render ComponentList');
  return (
    <>
      <h2>Use different component creations:</h2>
      <div style={{ marginLeft: '20px' }}>
        <FunctionComponentConst inputData='FunctionComponentConst' />
        <FunctionComponentConstBind inputData='FunctionComponentConstBind' />
        <FunctionComponentFun inputData='FunctionComponentFun' />
        <FunctionComponentFunBind inputData='FunctionComponentFunBind' />
        <ReactComponentWithRenderLogger inputData='test render logger' />
        <ReactComponentWithMemo
          inputData={`test memo: ${counter}`}
          on={isIncrement}
        />
        <ReactFunctionMemo inputData={`test: ${counter}`} on={isIncrement} />
        <ReactComponent inputData={`test: ${counter}`} on={isIncrement} />
        <ReactPureComponent inputData={`test: ${counter}`} on={isIncrement} />
        <ReactCreateElementAndFun inputData='ReactCreateElementAndFun' />
        <ReactCreateElementAndConst inputData='ReactCreateElementAndConst' />
        <Toggle onToggle={() => setIncrement((increment) => !increment)} />
      </div>
    </>
  );
};

export default ComponentList;
