const request = require('request');


const geocode = (address, {latitude, longitude, location} = {}) => {
    const encodedPlace = encodeURI(address);
    const url = `http://api.positionstack.com/v1/forward?access_key=3b414155d1a1d485cfb734275db3f38e&query=${encodedPlace}`;
    request({url, json: true}, (error, {body})=> {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.data.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, { 
                latitude: body.data[0].latitude,
                longitude:  body.data[0].longitude,
                location:  body.data[0].locality
            })
        }
    })
}


module.exports = geocode