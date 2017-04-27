'use strict'

const store = require('../store.js')
const api = require('./api')
const showMonstersTemplate = require('../templates/monsters.handlebars')
const showMonsterDetailTemplate = require('../templates/monster-detail.handlebars')
const monsterObject = require('./monster.js')

const monster = new monsterObject.Monster()

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
    getMonster(id)
  })
<<<<<<< HEAD
  $('.feed_monster').on('click', function () {
    store.data.monster.hunger += 1
    api.updateMonster(store.data)
      .then(updateMonsterSuccess)
      .catch(updateMonsterFailure)
=======
  $('.feed_monster').on('click', function (event) {
    monster.feed()
    updateMonster()
    getMonster(monster.id)
>>>>>>> dev
  })
}

const setMonsterParams = function (data){
  for (const key in monster) {
    if (monster.hasOwnProperty(key)) {
      monster[key] = data.monster[key]
    }
  }
}

const getMonsterSuccess = function (data) {
<<<<<<< HEAD
  store.data = data
  console.log('store.monster is ', store.data);
=======
  setMonsterParams(data)
>>>>>>> dev
  $('#monsters_overview').hide()
  $('#monster_details').show()
  const showMonsterHTML = showMonsterDetailTemplate({ monsters: data })
  $('.monster-detail').empty()
  $('.monster-detail').append(showMonsterHTML)
  addHandlebarsEvents()
}

const getMonsterFailure = function (error) {
  console.log(error)
}

const updateMonsterSuccess = function () {
<<<<<<< HEAD
  const id = store.data.monster.id
  api.getMonster(id)
    .then(getMonsterSuccess)
    .catch(getMonsterFailure)
=======
  console.log('Update Monster ran like omg')
>>>>>>> dev
}

const updateMonsterFailure = function error() {
  console.log(error)
}

const updateMonster = function () {
  const data = {'monster': {}}
  // strips prototypes off object for api consumption
  for (const key in monster) {
    if (typeof monster[key] === 'function') continue
    data.monster[key] = monster[key]
  }
  api.updateMonster(data)
    .then(updateMonsterSuccess)
    .catch(updateMonsterFailure)
}

const getMonster = function (id) {
  api.getMonster(id)
    .then(getMonsterSuccess)
    .catch(getMonsterFailure)
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
