import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    CardContainer,
    CardImageButton,
    CardImageContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardSubTitle,
    CardFooter,
    CardPrice,
    CardRoomInfo,
    CardRoomInfoDivider

} from "./style";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            image,
            title,
            forRent,
            price,
            numberOfRooms,
            space,
            address
        } = this.props;

        const buttonLabel = forRent ? 'Mieten' : 'Kaufen';

        return (
            <CardContainer>
                <CardImageButton name="card-image-button">{buttonLabel}</CardImageButton>
                <CardImageContainer>
                    <CardImage name="card-image" src={image} />
                </CardImageContainer>
                <CardContent>
                    <div>
                        <CardTitle name="card-title">{title}</CardTitle>
                        <CardSubTitle name="card-address">{address}</CardSubTitle>
                    </div>
                    <CardFooter>
                        <CardPrice name="card-price">{price} €</CardPrice>
                        <CardRoomInfo>
                            <span name="card-room-count">{numberOfRooms} Zimmer</span>
                            <CardRoomInfoDivider />
                            <span name="card-room-size">ab {space} m<sup>2</sup></span>
                        </CardRoomInfo>
                    </CardFooter>
                </CardContent>
            </CardContainer>
        )
    }
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    forRent: PropTypes.bool,
    price: PropTypes.number,
    numberOfRooms: PropTypes.number,
    space: PropTypes.number,
    address: PropTypes.string,
}

export { Card };
