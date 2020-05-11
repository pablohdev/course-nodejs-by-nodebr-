const EventEmitter = require('events')

class MyEmitter extends EventEmitter {



}

const myEmitter = new MyEmitter();

const nameEvent = 'user:click';

myEmitter.on(nameEvent, function (click) {
    console.log('A user clicked ', click)
})



// myEmitter.emit(nameEvent, 'in scroll bar')
// myEmitter.emit(nameEvent, 'in button ok')

// let count = 1;
// setInterval(() => {
//     myEmitter.emit(nameEvent, `time ${count++}`)
// }, 1000)



const stdin = process.openStdin();

stdin.addListener('data', function (value) {
    console.log(`you typed ${value.toString().trim()}`)
})