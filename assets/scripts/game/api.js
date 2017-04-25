'use strict'
const config = require('../config')
const store = require('../store.js')

const getMonsters = () => {
  return $.ajax({
    url: config.apiOrigin + '/monsters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMonster = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/monsters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getMonsters,
  createMonster
}
