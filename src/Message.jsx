import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  render() {
    return <label>{ this.props.message }</label>;
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}