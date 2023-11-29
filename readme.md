# Country finder
This api and module can be used to get your clients country details. You can use this as an API or install it for react.

## Use it as an API
Write the following in the HTML head tag, to use the API:
```html
<script src="https://thorvaldemar.github.io/country_finder/api.js"></script>
```
You can now use the API from another script the following way:
```javascript
// Inside an async function
const country = await getCountry();

// Inside a sync function
let country;
getCountry().then(found => country = found);
```

## Use is in React
Install it using `NPM`

> npm i react_country_finder

To get the country, you can simply import the module and use it as a function - like this:
```javascript
const getCountry = require('react_country_finder');
const country = getCountry();
```
Or with TypeScript:
```typescript
import getCountry from 'react_country_finder';
const country = getCountry();
```