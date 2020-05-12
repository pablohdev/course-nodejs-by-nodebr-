const { getPeople } = require(`./service`);

Array.prototype.myReduce = function (callback, initialValue) {

    let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

    for (let index = 0; index <= this.length - 1; index++) {
        finalValue = callback(finalValue, this[index], this);
    }

    return finalValue
}

async function main() {
    try {

        const { results } = await getPeople('a');

        const height = results.map(item => parseInt(item.height))

        //console.log(`height`, height)

        const total = height.myReduce((prev, next) => {
            return prev + next
        }, 2)

        console.log(total)

    } catch (error) {
        console.log(`Internal Error`, error)
    }
}

main();
