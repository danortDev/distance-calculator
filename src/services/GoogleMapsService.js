import * as asyncProcessActions from '../actions/asyncProcessActions';
import * as messages from '../constants/messagesConstants';

const service = new window.google.maps.DistanceMatrixService();

const formatAddress = (address) =>
    address.replace(" ", "+");

const formatLocation = (location) =>
    (location.lat + ',' + location.lng) ;

const getLocation = (place) =>
    place.location ?
        formatLocation(place.location) :
        formatAddress(place);

const errorNormalizer = (response, status) =>
    status == "OK" && response.rows[0].elements[0].status == "ZERO_RESULTS" ?
        messages.NO_DISTANCE_RESULTS : null;

export function getDistance(origin, destination, dispatch, callback) {
    dispatch(asyncProcessActions.beginAsyncProcess());
    service.getDistanceMatrix({
        origins: [getLocation(origin)],
        destinations: [getLocation(destination)],
        travelMode: 'DRIVING'
    }, (response, status) => {
        dispatch(asyncProcessActions.endAsyncProcess());
        callback(response, errorNormalizer(response, status));
    });
}
