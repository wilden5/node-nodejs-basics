import { createGzip } from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'stream';

const gzip = createGzip();
const source = fs.createReadStream('./files/fileToCompress.txt');
const destination = fs.createWriteStream('./files/archive.gz');

const compress = async () => {
    try {
        pipeline(
            source,
            gzip,
            destination,
            err => {
                console.log(err);
                process.exitCode = 1;
            }
        );
        console.log('File successfully compressed');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await compress();
