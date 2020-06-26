const axios = require('axios');

const getLugarLatitug = async(dir) => {
    const encodedUlr = encodeURI(dir);
    console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '5a3fe5bddfmshbb0ebd5395716a0p1a3a97jsnb380e5090c04' }
        //headers: { 'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results.length[0];
    const direccion = data.name;
    //const lat = data.lat;
    //const lng = data.lon;

    return {
        direccion,
        //lat,
        //lng
    }
}

module.exports = {
    getLugarLatitug
}