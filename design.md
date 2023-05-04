# Design

Simple SDK that calls the <https://the-one-api.dev> API and returns values based on the type of service that is called.

## File Structure

```sh
/example
/tests
/src
  /services
  /types
```

## Structure Explanation

### /example

Has a little playground showing how to use the SDK.

### /tests

Unit tests for all the classes that were created.

### /src/services

Classes created for each endpoint that has been integrated.

### /src/types

Types for the return objects of each class.

## Space for improvements

- Pagination on endpoints that way classes like `getAllQuotes` won't return an array with more than 900 objects at once.
- Caching option, that way when a class is called more than once instead of calling the API again the values are returned from the stored cache.
