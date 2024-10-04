import {  createGunzip } from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'stream';

const gunzip = createGunzip();
const source = fs.createReadStream('./files/archive.gz');
const destination = fs.createWriteStream('./files/decompressedFile.txt');

const decompress = async () => {
    try {
        pipeline(
            source,
            gunzip,
            destination,
            err => {
                console.log(err);
                process.exitCode = 1;
            }
        )
        console.log('File successfully decompressed');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await decompress();
