const { Client } = require('pg');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const gdal = require('gdal-async');


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

/*
    const lastDate = await fetchLastDate(client);
    console.log(`Last harvest: ${lastDate}`);

    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);
    endDate.setHours(0, 0, 0, 0);
    console.log(`End date: ${endDate}`);

    const dates = [];
    const date = new Date(lastDate);
    date.setHours(0, 0, 0, 0);
    while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    console.log(dates);

    const downloadFiles = dates.map(date => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `RW-${year}${month < 10 ? '0' : ''}${month}${day < 10 ? '0' : ''}${day}.tar.gz`;
    }).join(',')
    console.log(downloadFiles);

    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'radolan-'));
    console.log(`Created temporary directory: ${tmpDir}`);

    const downloadCmd = `wget -r -np -nH -e robots=off -w 3 --random-wait -P ${tmpDir} -nd -R index.html* -A '${downloadFiles}' https://opendata.dwd.de/climate_environment/CDC/grids_germany/hourly/radolan/recent/asc/`;
    console.log(`Downloading data from DWD: ${downloadCmd}`);
    execSync(downloadCmd);

    const uncompressCmd = `find ${tmpDir} -name '*.tar.gz' -exec tar -xzf {} -C ${tmpDir} \\;`;
    console.log(`Uncompressing data: ${uncompressCmd}`);
    execSync(uncompressCmd);
*/


    const dir = '/var/folders/5z/4vcjl51s5zzg05j1q4x9bwb40000gn/T/radolan-srqMjR';
    const radolanDataFilenames = fs.readdirSync(dir).filter(file => file.endsWith('.asc'));

    let counter = 0;
    for (const filename of radolanDataFilenames) {
        counter++;
        console.log(`Processing: ${counter}/${radolanDataFilenames.length}`);

        const filepath = path.join(dir, filename);
        const outfile = path.join(dir, filename.replace('.asc', '.tif'));
        const gdalwarpCmd = `gdalwarp ${filepath} ${outfile} -s_srs '+proj=stere +lon_0=10.0 +lat_0=90.0 +lat_ts=60.0 +a=6370040 +b=6370040 +units=m' -t_srs '+proj=stere +lon_0=10.0 +lat_0=90.0 +lat_ts=60.0 +a=6370040 +b=6370040 +units=m' -r near -of GTiff -cutline ./src/dwd-harvester/buffer.shp`;
        console.log(`Executing: ${gdalwarpCmd}`);
        execSync(gdalwarpCmd);

        const dataset = await gdal.openAsync(outfile);
        console.log(dataset);

        const dst = await gdal.openAsync(dir, 'w', 'ESRI Shapefile', 900, 900);
        console.log(dst);
        const lyr = dst.layers.create(filename.replace('.tif', '.shp'), null, gdal.Polygon);
        lyr.fields.add(new gdal.FieldDefn('MYFLD', gdal.OFTInteger))

        gdal.polygonize({
            src: dataset.bands.get(1),
            dst: lyr,
            pixValField: 11,
            progress_cb: (complete, message) => console.log(`${complete}% ${message}`)
        });
    }

    await client.end();

})();

