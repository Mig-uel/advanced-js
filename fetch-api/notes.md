# Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

- A modern way to make network requests, replacing the older XMLHttpRequest
- Fetch is built into the global window object
- Fetch is promise-based

```js
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data')
    const data = await res.json()

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

fetchData()
```

- The `fetch` function returns a ReadableStream object which represents the data being fetched (the response)
- The `json` method on the response object reads the response to completion and parses the response as JSON

# Error Handling

Error handling with the Fetch API is a bit different than with XMLHttpRequest. We can use the `try...catch` statement to catch errors, but there are some important differences to note:

- The `fetch` function will only reject a promise if the request cannot be made (e.g. network error)
- If the server returns an error response (e.g. 404, 500), the promise will still resolve
- To handle server errors, you need to check the `ok` property of the response object

```js
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
```
