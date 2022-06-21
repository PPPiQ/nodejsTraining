const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.meteo.pl:443/api/v1/model/coamps/grid/2a/coordinates/${latitude},${longitude}/field/airtmp_pre_fcstfld/level/000250_000000/date/2019-05-05T00/info`;
    const headers = {
        'Authorization': `Token a4706ad491037b45cd449ec8db1dc9430d58c814`
    }
    request({url,headers , json: true}, (error, { body })=> {
        const data = body;
        console.log(data);
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log(data);
            // callback(undefined, 
            //    `${data.current.weather_descriptions[0]}. It is currently ${ data.current.temperature } degress out. It feels like ${ data.current.feelslike }  degress out.`
            // )
        }
    })
}

module.exports = forecast;