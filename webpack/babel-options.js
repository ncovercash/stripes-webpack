module.exports = {
  presets: [
    ['@babel/preset-env', { targets: '> 0.25%, not dead' }],
    ['@babel/preset-flow', { all: true }],
    ['@babel/preset-react', {
      "runtime": "automatic"
    }],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    ['lodash'],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    // when building a platform directly, i.e. outside a workspace,
    // babel complains loudly and repeatedly that when these modules are enabled:
    // * @babel/plugin-proposal-class-properties,
    // * @babel/plugin-proposal-private-methods and
    // * @babel/plugin-proposal-private-property-in-object
    // the "loose" option must be the same for all three.
    // but @babel/preset-env sets it to false for ...private-methods.
    // overriding it here silences the complaint. STRWEB-12
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-private-methods', { 'loose': true }],
    ['@babel/plugin-proposal-private-property-in-object', { 'loose': true }],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-import-meta',
    [require.resolve('react-hot-loader/babel')],
  ],
};