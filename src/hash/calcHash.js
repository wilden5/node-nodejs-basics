import crypto from 'crypto';
import fs from 'node:fs';

const calculateHash = async () => {
    const hashSum = crypto.createHash('sha256');
    const stream = fs.createReadStream('./files/fileToCalculateHashFor.txt');

    stream.on('data', (chunk) => {
        hashSum.update(chunk);
    })

    stream.on('end', () => {
        console.log(hashSum.digest('hex'));
    })
};

await calculateHash();
