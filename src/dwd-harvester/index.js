const { Client } = require('pg');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');


const pgServer = 'localhost';
const pgPort = 54322;
const pgUsername = 'postgres';
const pgPassword = 'postgres';
const pgDatabase = 'postgres';

const client = new Client({
    host: pgServer,
    port: pgPort,
    database: pgDatabase,
    user: pgUsername,
    password: pgPassword,
});


async function fetchLastDate(client) {
    const cursor = await client.query('SELECT collection_date FROM radolan_harvester WHERE id = 1');
    return cursor.rows[0].collection_date;
}

(async () => {

    await client.connect();

    const lastDate = await fetchLastDate(client);
    console.log(`Last harvest: ${lastDate}`);

    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'radolan-'));
    console.log(`Created temporary directory: ${tmpDir}`);

    // Download radolan data from DWD since last harvest
    const downloadCmd = `wget -r -np -nH -e robots=off -w 5 --random-wait -P ${tmpDir} -R index.html* -A 'RW-20230111.tar.gz' https://opendata.dwd.de/climate_environment/CDC/grids_germany/hourly/radolan/recent/asc/`;
    console.log(`Downloading data from DWD: ${downloadCmd}`);

    const x = execSync(downloadCmd);
    console.log(x.toString());

    await client.end();

})();

