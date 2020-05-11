/*
    TODO
    0 Get user
    1 Get the user's phone number from their ID 
    2 Get the user's andress from their ID

    Promises Callback
    // resolve -> when resolve with success
    // reject -> when then is any error

*/

const util = require('util');
const getAndressAsync = util.promisify(getAndress)

function getUser() {

    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: 'Aladin',
                dateBirth: new Date()
            })
        }, 1000)
    })

}

function getPhone() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve(
                {
                    phone_number: '11990002',
                    ddd: 11
                }
            )
        }, 2000);
    })
}

function getAndress(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                street: 'rua do bobos',
                number: 0
            })
        }, 2000)

    })
}

main()

async function main() {
    try {

        console.time('async')
        const user = await getUser();

        const result = await Promise.all([
            getPhone(user.id),
            getAndress(user.id)
        ])

        const phone = result[0]
        const andress = result[1]

        console.timeEnd('async')

        console.log(`
            Name: ${user.name}
            Andress: ${andress.street}, ${andress.number}
            Phone: (${phone.ddd}) ${phone.phone_number}
        `)

    } catch (error) {
        console.log(`GOT BAD`, error)
    }
}