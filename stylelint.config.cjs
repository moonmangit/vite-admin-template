module.exports = {
    extends: ['stylelint-config-recommended'],
    rules: {
        indentation: 2,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    }
}
