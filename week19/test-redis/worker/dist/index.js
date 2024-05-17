"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
// create redis client
const client = (0, redis_1.createClient)();
function processSubmission(submission) {
    return __awaiter(this, void 0, void 0, function* () {
        const { problemId, code, language } = JSON.parse(submission);
        console.log('processing submission for problemId: ', problemId);
        console.log('code: ', code);
        console.log('language of submission: ', language);
        // actual code logic submission and processing logic
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`Finished processing submission for problemId: ${problemId}.`);
    });
}
function startWorker() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // connect redis client
            yield client.connect();
            console.log('redis client connected');
            while (true) {
                try {
                    const submission = yield client.brPop("submissions", 0);
                    console.log('submission: ', submission);
                    /*
                        submission:  {
                            key: 'submissions',
                            element: '{"problemId":1,"code":"int main() {}","language":"cpp"}'
                        }
                    */
                    //@ts-ignore
                    processSubmission(submission.element);
                }
                catch (err) {
                    // Implement your error handling logic here. 
                    // For example, you might want to push the submission back onto the queue or 
                    // log the error to a file.
                    console.log('error processing submission: ', err);
                }
            }
        }
        catch (err) {
            console.log('failed to start worker: ', err);
        }
    });
}
startWorker();
