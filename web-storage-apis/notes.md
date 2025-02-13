# Local Storage Basics

Allows web applications to store data locally within the user's browser. Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Local storage is per origin (per protocol, host, and port). All pages, from one origin, can store and access the same data.

Local storage provides at least 5MB of data storage across all major web browsers.

- **Local storage** stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
- **Session storage** stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- **Cookies** are mainly for reading server-side, but can also be read on the client side. They can be created using JavaScript, but are mainly used for server-side reading.

```javascript
// Store
localStorage.setItem('color', 'mauve')

// Retrieve
const retrievedValue = localStorage.getItem('color')

// Remove
localStorage.removeItem('color')

// Clear all
localStorage.clear()
```

- If a key/value pair already exists, `setItem()` will update the value.
- `getItem()` returns `null` if the key does not exist.

## Local Storage With Complex Data

Local storage can only store strings. To store arrays or objects, you would have to convert them to strings.

```javascript
const scores = [10, 20, 30]

// Store
localStorage.setItem('scores', JSON.stringify(scores))

// Retrieve
const retrievedScores = JSON.parse(localStorage.getItem('scores'))
```

- `JSON.stringify()` converts a JavaScript object or value to a JSON string.
- `JSON.parse()` parses a JSON string, constructing the JavaScript value or object described by the string.
