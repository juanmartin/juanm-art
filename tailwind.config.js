module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./content/**/*.mdx"],
  theme: {},
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      filter: ['group-hover'],
      textColor: ['group-hover']
    }
  },
  plugins: [],
}
