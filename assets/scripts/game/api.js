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

const getMonster = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/monsters/' + id,
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

const deleteMonster = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/monsters/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMonster = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/monsters/' + store.monster.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}


module.exports = {
  getMonsters,
  createMonster,
  deleteMonster,
  getMonster,
  updateMonster
}
