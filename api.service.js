const axios = require('axios');
const parser = require('xml2json');
module.exports = {
    getICO,
};

async function getICO(ico) {
    try {
        const data = await fetchData(ico);
        return formatData(data);
    } catch(e) {
        throw e;
    }
}

async function fetchData(ico) {
    return axios.get('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_rzp.cgi?ico=' + ico)
    .then((res) => {
        return (parser.toJson(res.data, { object: true, reversible: false, coerce: false, sanitize: true, trim: true, arrayNotation: false}));
    }).catch((err) => {
        console.error('Unable to get data - ' + err.code);
    })
}

function formatData(data) {
    const dataString = JSON.stringify(data);
    const cleanedString = dataString.replace(/are:|:are|:D|D:|:U/g, '');
    const cleanedStringJSON = JSON.parse(cleanedString);
    return cleanedStringJSON.Ares_odpovedi.Odpoved.Vypis_RZP;
}