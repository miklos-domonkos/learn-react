import React from 'react';
export class ReactComponent extends React.Component {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}
