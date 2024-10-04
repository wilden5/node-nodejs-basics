import fs from 'node:fs';

const write = async () => {
    const stream = await fs.createWriteStream('./files/fileToWrite.txt', { flags: 'a' });

    process.stdin.on('data', (chunk) => {
        stream.write(chunk);
    })

    process.stdin.on('end', () => {
        stream.end();
    })
};

await write();
