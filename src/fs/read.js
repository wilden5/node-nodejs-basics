import fs from 'node:fs/promises';

const read = async () => {
    try {
        const file = await fs.readFile('./files/fileToRead.txt', {encoding: 'utf-8'});
        console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
