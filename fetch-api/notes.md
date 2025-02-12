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

# Sending Request Headers With Fetch

The `fetch` function accepts an optional second parameter, an object that allows you to configure the request. This object can be used to set request headers, specify the request method, and more.

```js
async function fetchDataWithHeaders() {
  const headers = new Headers({
    'Content-Type': 'application/json
    'Authorization': 'Bearer token'
  })

  try {
    const res await fetch('https://api.example.com/data', {
      method: 'GET',
      headers
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    console.log(data)
  }
  catch(error){
    console.error(error)
  }
}

fetchDataWithHeaders()
```

Headers in a fetch request are used to provide additional information about the request being sent or specify how the client expects the response to be formatted. They play a crucial role in defining the communication between the client and the server. Here are few key purposes headers serve:

1. **Specifying Content Type**
   Headers like Content-Type tell the server the format of the data being sent (e.g., JSON, XML, or plain text).
   `"Content-Type": "application/json" `

2. **Authentication**
   Headers are often used to include authentication tokens or API keys, enabling the server to verify the client's identity.
   `"Authorization": "Bearer <token>" `

3) **Custom Headers**
   They allow the client to send custom metadata, like specific application configurations or user settings.

4. **Accept Header**
   Specifies the format the client expects in the response, such as JSON or HTML.
   `"Accept": "application/json"`

# POST Requests With Fetch

The `fetch` function can be used to make POST requests by specifying the request method in the configuration object. When making a POST request, you can include a body in the request to send data to the server.

```js
async function postData() {
  const data = {
    name: 'John Doe',
    email: '',
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  try {
    const res = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Failed to post data')
    }

    const response = await res.json()

    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
```

In the example above, we are sending a POST request to the server with a JSON payload. The `Content-Type` header is set to `application/json`, and the data is stringified using `JSON.stringify` before being sent in the request body.
