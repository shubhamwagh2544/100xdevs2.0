const {kafka} = require('./client');

async function init() {
    const producer = kafka.producer();
    console.log('producer connecting..');
    await producer.connect();
    console.log('producer connected..');

    console.log('Producing message..');
    await producer.send({
        topic: 'rider-update',
        messages: [{
            key: 'location-update',
            value: JSON.stringify({
                name: 'rider1',
                location: 'south'
            }),
            partition: 0
        }]
    })
    console.log('Message produced..');

    console.log('producer disconnecting..');
    await producer.disconnect();
    console.log('producer disconnected..');
}

init();