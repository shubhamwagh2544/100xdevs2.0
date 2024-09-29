const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log('admin connecting..');
    await admin.connect();
    console.log('admin connected..');

    console.log('Creating topic: [rider-update]');
    await admin.createTopics({
        topics: [{
            topic: 'rider-update',
            numPartitions: 2
        }]
    })
    console.log('Topic created [rider-update]');

    console.log('admin disconnecting..');
    await admin.disconnect();
    console.log('admin disconnected..');
}

init();