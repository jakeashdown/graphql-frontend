# Angular frontend to GraphQL backend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## GraphQL code generation

Run `npm run-script generate` to generate TypeScript code from the schema, taken from the configured endpoint, and any defined documents (operations and fragments).

Types will be generated for the entire schema, including:
* types
* input types
* enums
* interfaces
* scalars
* unions

Angular services will be generated for the following documents:
* queries
* mutations
* subscriptions
* fragments (can be included in other documents)

This project includes [a configuration file](apollo.config.js) for the Apollo extension for VS Code which adds syntax highlighting, autocomplete, etc. Because the same configuration is used by the [Apollo CLI](https://github.com/apollographql/apollo-tooling/), this could be used for code generation. Instead we use [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) which has better Angular integration, generating ready-to-inject services instead of simply the types,

## Code linting

Run `ng lint --fix` to lint code and fix any errors.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
