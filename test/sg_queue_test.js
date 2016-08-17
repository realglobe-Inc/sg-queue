/**
 * Test case for sgQueue.
 * Runs with mocha.
 */
'use strict'

const SGQueue = require('../lib/sg_queue.js')
const assert = require('assert')
const co = require('co')

describe('sg-queue', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg queue', () => co(function * () {
    let queue = new SGQueue()
    let results = []
    for (let i = 0; i < 10; i++) {
      queue.push(
        () => new Promise((resolve) => {
          setTimeout(() => {
            console.log('Task:', i)
            resolve(i)
          }, 10)
        })
      ).then((result) => results.push(result))
    }
    yield queue.then(() => {
      console.log('done!')
      assert.deepEqual(results, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
    })
  }))

  it('With error', () => co(function * () {
    let queue = new SGQueue()
    try {
      for (let i = 0; i < 2; i++) {
        yield queue.push(
          () => new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('hoge'))
            }, 10)
          })
        )
      }
    } catch (e) {
      assert.ok(e)
    }
  }))
})

/* global describe, before, after, it */
