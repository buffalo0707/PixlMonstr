'use strict'
const config = require('../config')
const store = require('../store.js')

const getMonsters = () => {
  return $.ajax({
    url: config.apiOrigin + '/monsters',
    method: 'GET'
  })
}

module.exports = {
  getMonsters
}
