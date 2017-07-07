# refactionjs
Refactoring exercise for Node - Complete version by Jeff

To run the app:
```
npm install
npm start
```
Browse to [http://localhost:3000](http://localhost:3000)

To run tests:
```
npm test
```

## Major improvements on the app:
* Added two types of backend services - one is traditional Restful api with endpoint at '/api/v1/people', another one is the GraphQL service, by default the app uses graphql services.
* Added unit tests
* Properly seperated code into nice structure and easy to extend.
* Using React + Redux on the frontend.
* Using ES6+ features.
* Using Webpack to do automatic build.
* Using ESLint and fixed all styling issues.
* Improved error handling.
* Remove hardcoded variables
* Added server-side logging, writing records to files under folder /log and rotate daily.

