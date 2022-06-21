const Logger = require('nodemon/lib/utils/log');
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=b56517ad070c6c3638f0580c0c68098e&query=37.8267,-122.4233&units=m';
// request({url, json: true}, (error, response) => {
//     const data = response.body;
//     if (error) {
//         console.error('Can not get connection to server.');
//     } else if (data.error) {
//         console.error('Unable to find location.');
//     } else {
//         console.log(`${data.current.weather_descriptions[0]}. It is currently ${ data.current.temperature } degress out. It feels like ${ data.current.feelslike }  degress out.`); 
//     }
// });


//Geocoding
// const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=3b414155d1a1d485cfb734275db3f38e&query=New%20York'
// request({url: geocodeURL, json: true}, (error, response)=> {
//     const responseData = response.body.data
//     const responseError = response.body.error;
//     if (error) {
//         console.error('Can establish connection to the server');
//     } else if (responseError) {
//         console.log('Query is incorect');
//     } else {
//         const latitude = responseData[0].latitude;
//         const longitude = responseData[0].longitude;
//         console.log(latitude  +" " + longitude);
//     }
// })

forecast(process.argv[2], process.argv[3], (error,data)=> {
    console.log('Error', error);
    console.log('Data', data);
})
// geocode('Boston', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// })
