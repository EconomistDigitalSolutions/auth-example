const {readFileSync} = require('fs');
const {createServer} = require('https');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;

const nextApp = next({dev: true});
const handler = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
        const server = createServer({
            key: readFileSync('.keys/localhost.key'),
            cert: readFileSync('.keys/localhost.crt'),
        }, handler);

        return server.listen(port, err => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on https://localhost:${port}`); // eslint-disable-line
        });
    })
    .catch(error => {
        console.log({
            level: 'error',
            err: {error: error.stack},
        });
    });
