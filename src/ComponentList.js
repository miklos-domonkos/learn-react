import React from 'react';

var man = { name: 'jack' };

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

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

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
