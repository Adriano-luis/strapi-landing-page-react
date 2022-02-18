module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends:[
        'eslinst:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    parsersOptions: {
        ecmaFeatures:{
            jsx: true,
        },
        ecmaVersion:12,
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react:{
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars' : 'off',
    },
};