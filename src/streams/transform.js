import { Transform, pipeline } from 'stream';

const read = process.stdin;
const write = process.stdout;

const transform = async () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk + '\n');
            callback();
        }
    });
};

const runPipeline = async () => {
    try {
        const reverseStream = await transform();
        pipeline(
            read,
            reverseStream,
            write,
            err => {
                console.log(err);
            }
        )
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

runPipeline();
