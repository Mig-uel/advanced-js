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

## What Should And Should Not Be Stored In Local Storage

- **Should**: User preferences, form data, shopping cart items, UI state.
  - Non-sensitive data that can be used to enhance user experience.
  - Data that can be used to improve performance.
  - Analytics data.
- **Should Not**: Sensitive data, large amounts of data (5MB is a lot, but not unlimited), data that needs to be shared with the server.
  - Sensitive data can be manipulated by the user.
  - Large amounts of data can slow down your web application.
  - Data that needs to be shared with the server should be stored in a database.

## Syncing Tabs With The Storage Event

The `storage` event is fired on the window object whenever `setItem()`, `removeItem()`, or `clear()` is called and actually changes something.

```javascript
window.addEventListener('storage', (event) => {
  console.log(event.key, event.newValue)
})
```

- The `storage` event is not fired when `setItem()`, `removeItem()`, or `clear()` is called from the same window that made the changes.
- The `storage` event is fired on other windows/tabs when the storage changes in the window that made the changes.

# Session Storage Basics

Session storage is similar to local storage, but it only stores data for one session. The data is deleted when the user closes the specific browser tab.

Session storage is per origin (per protocol, host, and port). All pages, from one origin, can store and access the same data.

Session storage provides at least 5MB of data storage across all major web browsers.

- Allows web applications to store key-value pairs locally for a single session.
- The data is deleted when the user closes the specific browser tab.

```javascript
// Store
sessionStorage.setItem('color', 'mauve')

// Retrieve
const retrievedValue = sessionStorage.getItem('color')

// Remove
sessionStorage.removeItem('color')

// Clear all
sessionStorage.clear()
```
