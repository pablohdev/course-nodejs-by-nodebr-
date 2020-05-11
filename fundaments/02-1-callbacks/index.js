/*
    TODO
    0 Get user
    1 Get the user's phone number from their ID 
    2 Get the user's andress from their ID
*/

function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Aladin',
            dateBirth: new Date()
        })
    }, 1000)
}

function getPhone(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            phone_number: '1199002',
            ddd: '11'
        })
    }, 2000)
}

function getAndress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'rua do bobos',
            number: 0
        })
    }, 2000)
}




getUser(function resolveUser(error, user) {
    //null || "" || 0 === false
    if (error) {
        console.log('GOT BAD ON USER', error)
        return;
    }

    getPhone(user.id, function resolvePhone(error1, phone) {
        //null || "" || 0 === false
        if (error) {
            console.log('GOT BAD ON PHONE', error1)
            return;
        }

        getAndress(user.id, function resolveAndress(error2, andress) {
            if (error2) {
                console.log('GOT BAD ON ANDRESS', error2)
                return;
            }

            console.log(`
                Name: ${user.name}
                Andress: ${andress.street}, ${andress.number}
                Phone: (${phone.ddd}) ${phone.phone_number}
            `)

        })
    })

})

