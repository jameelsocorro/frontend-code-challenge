import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './style';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, children } = this.props;
        return (
            <ButtonStyle>{title || children}</ButtonStyle>
        )
    }
}

Button.propTypes = {
    title: PropTypes.string
}

export { Button };
