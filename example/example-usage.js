'use strict'

const sgQueue = require('sg-queue')
const co = require('co')

co(function * () {
  // Make sure async tasks called sequentially
  let queue = sgQueue()
  let results = []
  for (let i = 0; i < 10; i++) {
    queue.push(
      () => new Promise((resolve) => {
        setTimeout(() => {
          console.log('Call:', i)
          resolve(i)
        }, 10)
      })
    ).then((result) => results.push(result))
  }
  yield queue.then(() => console.log('done!'))
}).catch((err) => console.error(err))
