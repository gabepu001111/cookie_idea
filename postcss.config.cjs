// Use the official Tailwind PostCSS plugin package. The plugin was moved out of the
// main tailwindcss package; require the new package here so PostCSS can load it.
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer')
  ]
}
