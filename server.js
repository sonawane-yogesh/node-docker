const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const database = require('ronin-database');
const server = ronin.server();

server.use('/', mocks.server(server.Router(), false, true));

async function main() {
    try {
        let connString = process.env.CONNECTION_STRING;
        console.log(connString);
        await database.connect(connString);
        let port = process.env.SERVER_PORT;
        console.log(port);
        const server = ronin.server({ port });
        server.use('/foo', (req, res) => {
            return res.json({ "foo": "bar" });
        });
        server.use('/', mocks.server(server.Router()));
        const result = await server.start();
        console.info(result);
    } catch (error) {
        console.error(error)
    }
}

main();