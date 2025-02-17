// const options = {
//   threshold: [0, 0.25, 0.5, 0.75, 1],
// }

// function observerCB(entries) {
//   entries.forEach((entry) => {
//     // console.log('INTERSECTION OBSERVED')
//     // console.log(entry)

//     if (entry.isIntersecting) {
//       const percentage = Math.round(entry.intersectionRatio * 100, 2)
//       console.log(`${percentage}% of the ad is visible`)
//     } else {
//       console.log('AD IS NOT VISIBLE')
//     }
//   })
// }

// const observer = new IntersectionObserver(observerCB, options)

// const ad = document.getElementById('ad')
// observer.observe(ad)

/** Tracking Ad View Time */
// let adViewTimes = []
// let adVisibleStartTime

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const { isIntersecting } = entry

//       if (isIntersecting) {
//         // ad is visible
//         adVisibleStartTime = Date.now()
//       } else if (adVisibleStartTime) {
//         // ad was visible, no longer is visible
//         let adViewDuration = Date.now() - adVisibleStartTime
//         adViewTimes.push(adViewDuration)

//         console.log(`Ad was viewed for ${adViewDuration}ms`)

//         adViewDuration = undefined
//       }
//     })
//   },
//   {
//     threshold: 0.5,
//   }
// )

// const ad = document.getElementById('ad')
// observer.observe(ad)

/** Multiple Entries */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { id } = entry.target
      const { isIntersecting } = entry

      if (isIntersecting) {
        console.log(`${id} ad is visible`)
      } else {
        console.log(`${id} ad is NOT visible`)
      }
    })
  },
  {
    threshold: 0.5,
  }
)

const ads = document.querySelectorAll('.ad')
ads.forEach((ad) => {
  observer.observe(ad)
})
