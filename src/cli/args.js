const parseArgs = () => {
    const args = process.argv.splice(2).map((item, index, array) => {
        if(item.startsWith('--')) {
            return `${item.slice(2)} is ${array[index + 1]}`;
        }
    });
    console.log(args.filter((item) => item !== undefined).join(', '));
};

parseArgs();
