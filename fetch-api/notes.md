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
