//require pg promise but call it immidiately
// so  we can configure it 

const pgp = require('pg-promise')({
    query: e => {
        console.log(`QUERY: ${e.query}`);
    }
});
const options = {
    host: 'localhost',
    database: 'fullstack-pets'
};

const db = pgp(options);
module.exports = db;