import express from 'express';
import cluster from 'cluster';
import os from 'os';

const totalCPUs = os.cpus().length;
const port = 3000;

if (cluster.isPrimary) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Primary ${process.pid} is running`);

    // fork workers
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died: `, code);
        console.log("Let's fork another worker!");
        cluster.fork();
    })
}
else {
    const app = express();
    console.log(`Worker ${process.pid} started`);

    app.get("/api/:n", function (req, res) {
        let n = parseInt(req.params.n);
        let count = 0;
    
        if (n > 5000000000) n = 5000000000;
    
        for (let i = 0; i <= n; i++) {
          count += i;
        }
    
        res.send(`Final count is ${count} ${process.pid}`);
      });
    
      app.listen(port, () => {
        console.log(`App listening on port ${port}`);
      });

      /*
            To see 10 different processes have started,
            use never-ending loop in this block
            log the process.pid and see CPU usage via htop
            
            console.log(console.log(`Worker ${process.pid} started`));
            let ctr = 0;
            while(1) {
                ctr++;
            }

            htop will show 10 CPUs utilised to ~100%
      */
}

/*
Horizontal Scaling: 
Creating multiple instances of nodejs application, distributing the load across multiple servers.

Bad for two reasons: 
1. Just ugly to do this, keep track of the processes that are up and down
2. Processes will have port conflicts, you’ll have to run each process on a saparate port

• Master Process: Within the Node.js process, the cluster module creates a master process.
The master process is responsible for creating and managing the worker processes.
• WorkerProcesses: The master process forks multiple worker processes using the fork method. Each worker process is an independent instance of your Node.js application, running in a separate process with its own event loop and memory space.
• Distributing Connections: When a client connects to your Node.js server, the connection is received by the master process. The master process then distributes the connection to one of the available worker processes.

When a new connection is established, it is assigned to one of the worker processes, and that worker process will handle all subsequent requests for that connection until the connection is closed.
There is a connection timeout.
Suppose when the URL is opened from Chrome, the connection was assigned to one of the worker processes, which is why it was having same PID. As long as the connection remained open, the subsequent requests (like refreshing the page) were handled by the same worker process, resulting in the same PID.
After a certain period of time, usually around 10-15 seconds, the browser closes the connection due to inactivity, fausing a new connection to be established. This new connection is then assigned to a different worker process, which is why you observed a different PID after that period.
This new connection follows Round-robin distribution.
*/