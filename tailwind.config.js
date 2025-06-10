/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./apps/web/src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                arcio: {
                    purple: '#7C3AED',  // Tailwind purple-600
                    pink: '#EC4899',    // Tailwind pink-500
                    red: '#EA4335',     // Google red for login
                    discord: '#5865F2', // Discord brand color
                    inputBg: '#FEF9C3', // Soft yellow
                },
            },
            backgroundImage: {
                'auth-gradient': 'linear-gradient(to bottom right, #0d0b22, #0d0b24, #0d0b2a)',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
