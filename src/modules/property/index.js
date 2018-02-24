import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions/property/property';

import { PropertyContainer } from "./style";

import {
    Card,
    PageModule,
    PageHeader,
    PageHeaderTitle,
    Spinner
} from '../../components';

class PropertyModule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        const { renderAsTest, fetchProperties } = this.props;

        if (!renderAsTest) {
            this.setState({ loading: true });
            fetchProperties().then(() => {
                this.setState({ loading: false });
            });
        }
    }

    renderProperties() {
        const { loading } = this.state;
        const { properties } = this.props;

        if (loading)
            return <Spinner size={70} />

        return (
            <PropertyContainer>
                {
                    properties.map((property, key) => {
                        return (
                            <Card
                                key={key}
                                duration="0.3s"
                                image={property.image}
                                title={property.title}
                                forRent={property.forRent}
                                price={property.price}
                                numberOfRooms={property.numberOfRooms}
                                space={property.space}
                                address={property.address}
                            />
                        )
                    })
                }
            </PropertyContainer>
        )
    }

    render() {
        return (
            <PageModule name="properties">
                <PageHeader>
                    <PageHeaderTitle>McMakler Exam</PageHeaderTitle>
                </PageHeader>
                {this.renderProperties()}
            </PageModule>
        )
    }
}

function mapStateToProps(state) {
    const { properties } = state.property;
    return { properties };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { fetchProperties },
        dispatch
    );
}

PropertyModule.propTypes = {
    properties: PropTypes.array,
    fetchProperties: PropTypes.func,
    renderAsTest: PropTypes.bool //this is use to avoid error when running test
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyModule);
