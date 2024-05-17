import { createClient } from "redis";

// create redis client
const client = createClient();


async function processSubmission(submission: string) {
    const { problemId, code, language } = JSON.parse(submission)

    console.log('processing submission for problemId: ', problemId)
    console.log('code: ', code)
    console.log('language of submission: ', language)

    // actual code logic submission and processing logic

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(`Finished processing submission for problemId: ${problemId}.`);
}

async function startWorker() {
    try {
        // connect redis client
        await client.connect()
        console.log('redis client connected')

        while (true) {
            try {
                const submission = await client.brPop("submissions", 0)
                console.log('submission: ', submission)

                /*
                    submission:  {
                        key: 'submissions',
                        element: '{"problemId":1,"code":"int main() {}","language":"cpp"}'
                    }
                */

                //@ts-ignore
                processSubmission(submission.element)
            }
            catch (err) {
                // Implement your error handling logic here. 
                // For example, you might want to push the submission back onto the queue or 
                // log the error to a file.
                console.log('error processing submission: ', err)
            }
        }

    }
    catch (err) {
        console.log('failed to start worker: ', err)
    }
}

startWorker()