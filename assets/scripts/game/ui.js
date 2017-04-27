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
  $('.rename_monster').on('click', function () {
    const data = {}
    api.updateMonster(data)
      .then(updateMonsterSuccess)
      .catch(updateMonsterFailure)
  })
}

const getMonsterSuccess = function (data) {
  store.monster = data.monster
  console.log('store.monster is ', store.monster);
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
console.log('Update Monster ran like omg');
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
