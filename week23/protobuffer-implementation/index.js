const protobuf = require('protobufjs')
const fs = require('fs')

// Load the Protocol Buffers schema
protobuf.load('a.proto')
.then(root => {
    // Obtain the Person message type
    const Person = root.lookupType('Person')

    // Create a new Person instance
    // const person = Person.create({ name: 'John Doe', age: 30});
    const person = { name: 'John Doe', age: 30};

    // Serialize Person to a buffer
    const buffer = Person.encode(person).finish();

    // Write buffer to a file
    fs.writeFileSync('person.bin', buffer);

    console.log('Person serialized and saved to person.bin');

    // Read the buffer from file
    const bufferFromFile = fs.readFileSync('person.bin');

    // Deserialize buffer back to a Person object
    const deserializedPerson = Person.decode(bufferFromFile);

    console.log('Person deserialized from person.bin:', deserializedPerson);
})
.catch(console.error);