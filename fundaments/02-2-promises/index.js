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

function getAndress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'rua do bobos',
            number: 0
        })
    }, 2000)
}


// to manipulate success we use the .then function
// to manipulate error we use the .cath function

const userPromise = getUser();
userPromise
    .then(function (user) {
        return getPhone(user.id)
            .then(function resolvePhone(result) {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    phone: result
                }
            })
    })
    .then(function (andress) {
        const new_andress = getAndressAsync(andress.user.id)
        return new_andress.then(function resolveAndress(result) {
            return {
                user: andress.user,
                phone: andress.phone,
                andress: result
            }
        });
    })
    .then(function (result) {
        console.log(`
            Name: ${result.user.name}
            Andress: ${result.andress.street}, ${result.andress.number}
            Phone: (${result.phone.ddd}) ${result.phone.phone_number}
        `)
    })
    .catch(function (error) {
        console.log('GOT BAD USER', error)
    })
