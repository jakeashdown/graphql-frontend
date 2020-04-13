module.exports = {
  client: {
    service: {
      // Get the schema from the endpoint used for code generation
      url: 'http://127.0.0.1:8080/graphql',
      skipSSLValidation: true,
    },
    // Only look at operations defined in graphql files
    includes: ['**/*.graphql'],
    // Exclude TypeScript files containing generated code;
    // otherwise the Apollo extension complains about duplicate operation names
    excludes: ['**/*.ts']
  }
};