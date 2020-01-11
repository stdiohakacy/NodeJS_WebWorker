const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
    const worker = new Worker(() => {
        this.onmessage = () => {
            let counter = 0;
            while (counter < 1e9)
                counter++;
            postMessage(counter);
        };
    });

    worker.onmessage = (message) => {
        console.log(message.data);
        res.send('' + message.data);
    };

    worker.postMessage();
});

app.listen(3000);
