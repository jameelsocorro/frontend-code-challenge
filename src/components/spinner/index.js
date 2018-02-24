import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MDSpinner from "react-md-spinner";

import {SpinnerContainer} from './style';

class Spinner extends Component {
    render() {
        const { size } = this.props;
        return (
            <SpinnerContainer name="spinner">
                <MDSpinner size={size}/>
            </SpinnerContainer>
        )
    }
}

Spinner.propTypes = {
    size: PropTypes.number
}

export { Spinner };
