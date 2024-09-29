const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['172.20.10.2:9092']
})

module.exports = {kafka};