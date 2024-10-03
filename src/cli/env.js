process.env['RSS_VAR_1'] = 'one';
process.env['RSS_VAR_2'] = 'two';

const parseEnv = () => {
    const env = Object.entries(process.env)
        .filter(([key]) => key.startsWith("RSS_"))
        .map(([key, value]) => `${key}=${value}`);
    console.log(env.join('; '));
};

parseEnv();
