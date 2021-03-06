/**
 * Tasks queue
 * @module sg-queue
 * @version 1.1.3
 */

'use strict'

const create = require('./create')
const SGQueue = require('./sg_queue')

let lib = create.bind(this)

Object.assign(lib, {
  create,
  SGQueue
})

module.exports = lib