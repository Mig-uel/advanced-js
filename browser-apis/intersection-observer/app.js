function observerCB(entries) {
  entries.forEach((entry) => {
    // console.log('INTERSECTION OBSERVED')
    // console.log(entry)

    if (entry.isIntersecting) {
      console.log('AD IS VISIBLE')
    } else {
      console.log('AD IS NOT VISIBLE')
    }
  })
}

const observer = new IntersectionObserver(observerCB)

const ad = document.getElementById('ad')
observer.observe(ad)
