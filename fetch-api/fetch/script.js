const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const postForm = document.getElementById('post-form')
const postsContainer = document.getElementById('posts')

function displayPosts(posts) {
  posts.forEach((post) => {
    const postContainer = document.createElement('div')
    postContainer.classList.add('post-content')

    const postContent = document.createElement('div')
    postContent.classList.add('post')

    const postTitle = document.createElement('h1')
    postTitle.innerText = post.title
    postTitle.classList.add('post-title')

    const postBody = document.createElement('div')
    postBody.innerText = post.body
    postBody.classList.add('post-body')

    postContent.appendChild(postTitle)
    postContent.appendChild(postBody)

    postsContainer.appendChild(postContent)
  })
}

async function fetchPosts() {
  try {
    const res = await fetch(BASE_URL)

    if (!res.ok) throw new Error('Something went wrong fetching posts!')

    const posts = await res.json()

    displayPosts(posts)
  } catch (error) {
    console.error(error)
  }
}

fetchPosts()
