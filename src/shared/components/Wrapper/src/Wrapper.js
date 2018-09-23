import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './Styles';

const { WrapperBase } = Styles;
const { string } = PropTypes;

class Wrapper extends Component {
  static propTypes = {
    name: string,
  };

  static defaultProps = {
    name: 'Wrapper',
  };

  render() {
    return <WrapperBase>{this.props.children}</WrapperBase>;
  }
}

export default Wrapper;
