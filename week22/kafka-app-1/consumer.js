const {kafka} = require('./client');

async function init() {
    const consumer = kafka.consumer({groupId: 'test-group-1'});

    console.log('consumer connecting..');
    await consumer.connect();
    console.log('consumer connected..');

    console.log('Consumer subscribing..');
    await consumer.subscribe({
        topics: ['rider-update'],
        fromBeginning: true
    })
    console.log('Consumer subscribed..');

    await consumer.run({
        eachMessage: async function({topic, message, partition}) {
            console.log(`[${topic}]: partition: ${partition}: message: ${message.value.toString()}`);
        }
    })
}

init();