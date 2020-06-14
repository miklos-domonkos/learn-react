import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export class ReactPureComponent extends React.PureComponent {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}
ReactPureComponent.propTypes = propTypes;
