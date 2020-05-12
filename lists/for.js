const service = require(`./service`);


async function main() {
    try {

        const result = await service.getPeople('a');
        const names = [];


        //for
        console.time(`with for`)
        for (let i = 0; i <= result.results.length - 1; i++) {

            const people = result.results[i];
            names.push(people.name)
        }
        console.timeEnd(`with for`)

        //forin
        console.time(`with forIn`)
        for (let i in result.results) {
            const people = result.results[i]
            names.push(people.name);
        }
        console.timeEnd(`with forIn`)

        //forof
        console.time(`with forOf`)
        for (people of result.results) {
            names.push(people.name)
        }
        console.timeEnd(`with forOf`)


        console.log(`names`, names);

    } catch (error) {
        console.log(`Internal Error`, error)
    }
}

main();