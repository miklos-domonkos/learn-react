import React from 'react';
export class ReactPureComponent extends React.PureComponent {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}
