const {kafka} = require('./client');

const group = process.argv[2];          // node consumer.js user-1

async function init() {
    const consumer = kafka.consumer({groupId: group });

    console.log('consumer connecting..');
    await consumer.connect();
    console.log('consumer connected..');

    console.log('Consumer subscribing..');
    await consumer.subscribe({
        topics: ['rider-update'],
        // fromBeginning: true
    })
    console.log('Consumer subscribed..');

    await consumer.run({
        eachMessage: async function({topic, message, partition}) {
            console.log(`${group}: [${topic}]: partition: ${partition}: message: ${message.value.toString()}`);
        }
    })
}

init();