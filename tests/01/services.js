const { get } = require('axios');



const URL = 'https://swapi.dev/api/people'


async function getPeople(name) {

    const url = `${URL}/?search=${name}&format=json`
    const result = await get(url);
    return result.data.results.map(mapPeople)
}

function mapPeople(item) {
    return {
        name: item.name,
        height: item.height
    }
}

module.exports = {
    getPeople
}