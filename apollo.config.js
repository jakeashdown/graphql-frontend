module.exports = {
  client: {
    name: "frontend",
    service: {
      name: 'local-backend',
      url: 'http://127.0.0.1:8080/graphql',
      skipSSLValidation: true
    },
    excludes: [
      'node_modules',
      '**/*.spec.ts',
      'src/graphql/**/*generated.ts' // ignores types output by graphql-codegen
    ],
  }
};