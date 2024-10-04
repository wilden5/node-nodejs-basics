import fs from 'node:fs';

const read = async () => {
    const stream = await fs.createReadStream('./files/fileToRead.txt', {encoding: 'utf8'});

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('end', () => {
        process.stdout.write('\n');
    })
};

await read();
