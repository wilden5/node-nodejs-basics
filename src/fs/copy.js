import fs from 'node:fs/promises';

const copy = async () => {
    try {
        await fs.cp('./files', './files_copy', { recursive: true, force: false, errorOnExist: true});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
