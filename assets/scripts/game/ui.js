'use strict'

const store = require('../store.js')
const api = require('./api')
const showMonstersTemplate = require('../templates/monsters.handlebars')
const showMonsterDetailTemplate = require('../templates/monster-detail.handlebars')

const getMonstersSuccess = function (data) {
  const showMonsterHTML = showMonstersTemplate({ monsters: data.monsters })
  $('.content').empty()
  $('.content').append(showMonsterHTML)
  addHandlebarsEvents()
}

const getMonstersFailure = function () {

}

const createMonsterSuccess = function (data) {
  const showMonsterHTML = showMonstersTemplate({ monsters: data })
  $('.content').append(showMonsterHTML)
  addHandlebarsEvents()
}

const createMonsterFailure = function () {

}

const deleteMonsterSuccess = function () {
}

const deleteMonsterFailure = function () {
}

const addHandlebarsEvents = function () {
  $('.delete_monster').on('click', function (event) {
    $(event.target).parent().parent().remove()
    const id = $(event.target).parent().parent().attr('data-id')
    api.deleteMonster(id)
      .then(deleteMonsterSuccess)
      .catch(deleteMonsterFailure)
  })
  $('.view_monster').on('click', function (event) {
    const id = $(event.target).parent().parent().attr('data-id')
    api.getMonster(id)
      .then(getMonsterSuccess)
      .catch(getMonsterFailure)
  })
  $('.feed_monster').on('click', function () {
    store.data.monster.hunger += 1
    api.updateMonster(store.data)
      .then(updateMonsterSuccess)
      .catch(updateMonsterFailure)
  })
}

const getMonsterSuccess = function (data) {
  store.data = data
  console.log('store.monster is ', store.data);
  $('#monsters_overview').hide()
  $('#monster_details').show()
  const showMonsterHTML = showMonsterDetailTemplate({ monsters: data })
  $('.monster-detail').empty()
  $('.monster-detail').append(showMonsterHTML)
  addHandlebarsEvents()
}

const getMonsterFailure = function () {

}

const updateMonsterSuccess = function () {
  const id = store.data.monster.id
  api.getMonster(id)
    .then(getMonsterSuccess)
    .catch(getMonsterFailure)
}

const updateMonsterFailure = function () {

}

const goBack = function () {
  $('#monsters_overview').show()
  $('#monster_details').hide()
}

module.exports = {
  getMonstersSuccess,
  getMonstersFailure,
  createMonsterSuccess,
  createMonsterFailure,
  deleteMonsterSuccess,
  deleteMonsterFailure,
  goBack
}
