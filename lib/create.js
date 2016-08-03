/**
 * Create a SGQueue instance
 * @function create
 * @returns {SGQueue}
 */
'use strict'

const SGQueue = require('./sg_queue')

/** @lends create */
function create (...args) {
  return new SGQueue(...args)
}

module.exports = create
