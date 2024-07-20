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
*/