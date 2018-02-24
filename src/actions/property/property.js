import _ from 'lodash';
import axios from 'axios';
import { FETCH_PROPERTIES } from "../../constants";

function transformProperty(data) {
    const image = data.advertisementAssets[0].advertisementThumbnails.inventory_m.url;
    const title = data.title;

    const { sellPrice, baseRent } = data.advertisementPrice;
    const forRent = sellPrice ? false : true;
    const price = forRent ? baseRent : sellPrice;

    const { address, numberOfRooms, space } = data.realestateSummary;

    return {
        image,
        title,
        forRent,
        price,
        numberOfRooms,
        space: Math.round(space),
        address: `${address.postalCode} ${address.street} / ${address.city} `,
    }
}

export function fetchPropertiesOnSuccess(payload) {
    return {
        type: FETCH_PROPERTIES,
        payload
    };
}

export function fetchProperties() {
    return (dispatch) => {

        const config = {
            transformResponse: axios.defaults.transformResponse.concat((response) => {
                const { data } = response;
                let properties = [];

                if (data && data.length > 0) {
                    properties = data.slice(0, 10).map(item => transformProperty(item))
                }

                return properties;
            })
        };

        return axios.get(`/api/advertisements`, config)
                .then((result) => {
                    const { data } = result;
                    dispatch(fetchPropertiesOnSuccess(data))
                })
                .catch((error) => {
                    console.log(error);
                });
      }
}
