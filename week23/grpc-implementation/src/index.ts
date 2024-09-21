import path from 'path';
import * as grpc from '@grpc/grpc-js';
import {ServiceClientConstructor} from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {ProtoGrpcType} from "./generated/a";

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const PERSONS = [
    {
        name: "shubham",
        age: 45
    },
    {
        name: "raman",
        age: 45
    },
];

//@ts-ignore
function addPerson(call, callback) {
    console.log(call)

    let person = {
        name: call.request.name,
        age: call.request.age
    }

    PERSONS.push(person);
    // error first callback
    callback(null, person)
}

const server = new grpc.Server();

server.addService(
    (personProto.AddressBookService as unknown as ServiceClientConstructor).service,
    { addPerson: addPerson }
);

// localhost:50051
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start()
});

// generate types for proto file: node ./node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js  --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=generated ./src/a.proto