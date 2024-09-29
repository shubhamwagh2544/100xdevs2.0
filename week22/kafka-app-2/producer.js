const {kafka} = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function init() {
    const producer = kafka.producer();
    console.log('producer connecting..');
    await producer.connect();
    console.log('producer connected..');

    rl.setPrompt('> ');
    rl.prompt();
    rl.on('line', async (line) => {
        const [riderName, location] = line.split(' ');

        // console.log('Producing message..');
        await producer.send({
            topic: 'rider-update',
            messages: [{
                key: 'location-update',
                value: JSON.stringify({
                    name: riderName,
                    location: location
                }),
                partition: location.toLowerCase() === 'north' ? 0 : 1,
            }]
        })
        // console.log('Message produced..');
    })
        .on('close', async () => {
            console.log('producer disconnecting..');
            await producer.disconnect();
            console.log('producer disconnected..');
        })
}

init();