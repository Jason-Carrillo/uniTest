module.exports = {
    purge: [],
    theme: {
        extend: {
            animation: {
                wiggle: 'wiggle 1s infinite',
        },
        keyframes: {
            wiggle: {
                '0%, 100%': {
                    transform: 'rotate(5deg)',
                },
                '50%': {
                    transform: 'rotate(-5deg)',
                }
            }
        }
    },
},
variants: {},
plugins: [],
}