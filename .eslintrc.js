module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-var': 'warn',
        quotes: ['warn', 'single'],
        'react/react-in-jsx-scope': 'off',
    },
};
