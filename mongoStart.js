const mongo = require('mongodb');
const uri = require('./mongoUrl').url();

console.log(uri);

async function main () {
    try {
        var client = new mongo.MongoClient(uri);
        await client.connect();
        console.log(client);
    } finally {
        await client.close()
    }
}

main().catch(console.error);