/**
 * Task queue class
 * @class SGQueue
 */
'use strict'

/** @lends SGQueue */
class SGQueue {
  constructor () {
    const s = this
    s._worker = null
  }

  push (task) {
    const s = this
    let worker = s.then(task)
    s._worker = worker
    return worker
  }

  then (next) {
    const s = this
    return Promise.resolve(s._worker)
      .then(next)
      .catch((err) => {
        s._worker = null
        return Promise.reject(err)
      })
  }
}

module.exports = SGQueue
