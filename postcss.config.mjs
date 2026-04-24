/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 关键！这里必须是 @tailwindcss/postcss 而不是 tailwindcss
    '@tailwindcss/postcss': {},
  },
};

export default config;