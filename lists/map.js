const service = require(`./service`);

Array.prototype.myMap = function (callback) {
    const newArrayMap = []

    for (let index = 0; index <= this.length - 1; index++) {
        const result = callback(this[index], index)
        newArrayMap.push(result)
    }

    return newArrayMap;
}


async function main() {
    try {

        const result = await service.getPeople('a');
        //const names = [];

        // result.results.forEach(function (item) {
        //     names.push(item.name)
        // })

        const names = result.results.myMap(function (people, index) {
            return `[${index}] ${people.name}`
        })

        console.log(`names`, names)

    } catch (error) {
        console.log(`Internal Error`, error)
    }
}

main();