const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(async (entry) => {
      const { isIntersecting } = entry

      if (isIntersecting) {
        console.log('Image in view')
        const headers = new Headers({
          Authorization: ``,
        })

        const res = await fetch('https://api.unsplash.com/photos/random', {
          headers,
        })
        const data = await res.json()

        entry.target.src = data.urls.small
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.5,
  }
)

const images = document.querySelectorAll('img.lazy')
images.forEach((img) => observer.observe(img))
