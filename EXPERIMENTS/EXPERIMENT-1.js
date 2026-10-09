// 1.
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => 
    {
        console.log(`Welcome, ${name}`); 
    });
myEmitter.on('exit', (code) => 
    {
        console.log(`Exit event received. Code: ${code}`); 
    });
myEmitter.emit('greet', 'B.Tech Students');
myEmitter.emit('exit', 0);
console.log('\n')

// 2.
const app = new EventEmitter();
app.on('login', (user) => 
    {
        console.log(`${user} logged in`); 
    });
app.on('message', (msg) => 
    {
    console.log(`Message: ${msg}`);
    });
app.emit('login', 'sidsxn');
app.emit('message', 'Welcome to Node.js\n');

// 3.
console.log('1. Start');
process.nextTick(() => console.log('2. nextTick'));
setTimeout(() => console.log('3. setTimeout'), 2000);
setImmediate(() => console.log('4. setImmediate'));
console.log('5. end');