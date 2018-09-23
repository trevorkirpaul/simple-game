import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './Styles';

const { ButtonBase } = Styles;
const { string, func } = PropTypes;

class Button extends Component {
  static propTypes = {
    label: string,
    onClick: func,
  };

  static defaultProps = {
    label: 'default label',
    onClick: () => {},
  };

  render() {
    const { onClick, label } = this.props;
    return <ButtonBase onClick={onClick}>{label}</ButtonBase>;
  }
}
export default Button;
