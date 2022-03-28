module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: [
        'airbnb-base',
    ],
    plugins: [
        'import',
    ],
    rules: {
        'import/extensions': [
            'error',
            {
                js: true,
                svg: true,
            },
        ],
        'no-underscore-dangle': 'off',
        'newline-before-return': 'error',
        'consistent-return': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'class-methods-use-this': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'max-len': 'off',
        'new-cap': ['error', {
            newIsCap: false,
            capIsNew: false,
            properties: true,
        }],
        'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
        quotes: ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],
        'prefer-const': 'error',
    },
}