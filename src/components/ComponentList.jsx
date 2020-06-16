import React from 'react';
import Toggle from './Toggle';
import { FunctionComponentConst } from './FunctionComponentConst';
import { FunctionComponentFun } from './FunctionComponentFun';
import { ReactComponent } from './ReactComponent';
import { ReactPureComponent } from './ReactPureComponent';
import { ReactCreateElementAndFun } from './ReactCreateElementAndFun';
import { ReactCreateElementAndConst } from './ReactCreateElementAndConst';

var man = { name: 'Jack' };

const FunctionComponentFunBind = FunctionComponentFun.bind(man);
const FunctionComponentConstBind = FunctionComponentConst.bind(man);

const ComponentList = () => {
  return (
    <>
      <h2>Use different component creations:</h2>
      <div style={{ marginLeft: '20px' }}>
        <FunctionComponentConst inputData='FunctionComponentConst' />
        <FunctionComponentConstBind inputData='FunctionComponentConstBind' />
        <FunctionComponentFun inputData='FunctionComponentFun' />
        <FunctionComponentFunBind inputData='FunctionComponentFunBind' />
        <ReactComponent inputData='ReactComponent' />
        <ReactPureComponent inputData='ReactPureComponent' />
        <ReactCreateElementAndFun inputData='ReactCreateElementAndFun' />
        <ReactCreateElementAndConst inputData='ReactCreateElementAndConst' />
        <Toggle />
      </div>
    </>
  );
};

export default ComponentList;
