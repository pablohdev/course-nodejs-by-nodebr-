const { getPeople } = require(`./service`);

Array.prototype.myFilter = function (callback) {

    const list = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if (!result) continue;
        list.push(item)
    }

    return list;
};


async function main() {
    try {

        const { results } = await getPeople('a');

        const familyLars = results.myFilter((item, index, list) => {
            console.log(`[${index}] - ${list.length}`)
            item.name.toLowerCase().indexOf(`lars`) !== -1
        })

        const names = familyLars.map(people => people.name)

        console.log(names)

    } catch (error) {
        console.log(`Internal Error`, error)
    }
}

main();