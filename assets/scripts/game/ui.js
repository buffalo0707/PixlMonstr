'use strict'

const store = require('../store.js')
const api = require('./api')
const showMonstersTemplate = require('../templates/monsters.handlebars')
const showMonsterDetailTemplate = require('../templates/monster-detail.handlebars')
const monsterObject = require('./monster.js')

const monster = new monsterObject.Monster()

const getMonstersSuccess = function (data) {
  // to-do: for each monster in data
  // set monster object using stats for that monster
  // check eatAndPoop()
  //    if true, update monster and run get monster again
  // check is dead
  //  update image based on status
  store.data = data
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
    const id = $(event.target).parent().parent().parent().attr('data-id')
    $(event.target).parent().parent().remove()
    api.deleteMonster(id)
      .then(deleteMonsterSuccess)
      .catch(deleteMonsterFailure)
  })
  $('.view_monster').on('click', function (event) {
    const id = $(event.target).parent().parent().attr('data-id')
    getMonster(id)
  })
  $('.feed_monster').on('click', function (event) {
    monster.feed()
    updateMonster()
    getMonster(monster.id)
  })
  $('.clean_monster').on('click', function (event) {
    monster.clean()
    updateMonster()
    getMonster(monster.id)
  })
  $('.play_with_monster').on('click', function (event) {
    monster.play()
    updateMonster()
    getMonster(monster.id)
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
  setMonsterParams(data)
  if (monster.eatAndPoop()) updateMonster()
  $('#monsters_overview').hide()
  $('#monster_details').show()
  const showMonsterHTML = showMonsterDetailTemplate({monster})
  $('.monster-detail').empty()
  $('.monster-detail').append(showMonsterHTML)
  addHandlebarsEvents()
}

const getMonsterFailure = function (error) {
  console.log(error)
}

const updateMonsterSuccess = function () {
  getMonster(monster.id)
}

const updateMonsterFailure = function (error) {
  console.log(error)
}

const updateMonster = function () {
  const data = {'monster': {}}
  // strips prototypes off object for api consumption
  for (const key in monster) {
    if (typeof monster[key] === 'function') continue
    data.monster[key] = monster[key]
  }
  console.log('update data is', data);
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
  api.getMonsters()
    .then(getMonstersSuccess)
    .catch(getMonstersFailure)
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
