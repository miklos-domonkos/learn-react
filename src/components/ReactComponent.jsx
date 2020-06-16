import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  inputData: PropTypes.string.isRequired,
};

export class ReactComponent extends React.Component {
  render() {
    return <h3>Hello {this.props.inputData}</h3>;
  }
}

ReactComponent.propTypes = propTypes;
