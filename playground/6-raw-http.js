const http = require('https');
const url = `https://api.meteo.pl:443/api/v1/model/coamps/grid/2a/coordinates/130,111/field/airtmp_pre_fcstfld/level/000250_000000/date/2019-05-05T00/info`;
const request = http.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    })

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end()