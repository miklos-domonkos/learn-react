import React from 'react';
import Toggle from './Toggle';

var man = { name: 'Jack' };

function FunctionComponentFun({ inputData }) {
  return (
    <>
      <h3>Hello {inputData}</h3>
      <p>{JSON.stringify(this)}</p>
    </>
  );
}

const FunctionComponentConst = ({ inputData }) => (
  <>
    <h3>Hello {inputData}</h3>
    <p>{JSON.stringify(this)}</p>
  </>
);

const FunctionComponentFunBind = FunctionComponentFun.bind(man);
const FunctionComponentConstBind = FunctionComponentConst.bind(man);

class ReactComponent extends React.Component {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}

class ReactPureComponent extends React.PureComponent {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}

function ReactCreateElementAndFun({ inputData }) {
  return React.createElement('h3', null, `Hello ${inputData}`);
}

const ReactCreateElementAndConst = ({ inputData }) => {
  return React.createElement('h3', null, `Hello ${inputData}`);
};

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
