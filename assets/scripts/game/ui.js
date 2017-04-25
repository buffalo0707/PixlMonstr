'use strict'

const store = require('../store.js')
const showMonsterTemplate = require('../templates/monsters.handlebars')

const getMonstersSuccess = function (data) {
  console.log('monster data is:', data)
  const showMonsterHTML = showMonsterTemplate({ monsters: data.monsters })
  console.log('showMonsterHTML is', showMonsterHTML);
  $('.content').append(showMonsterHTML)
  // let showMonstersHtml = showMonstersTemplate({ monsters: data.monsters });
}

const getMonstersFailures = function () {

}

const createMonsterSuccess = function (data) {
  console.log(data)
}

const createMonsterFailure = function () {

}

module.exports = {
  getMonstersSuccess,
  getMonstersFailures,
  createMonsterSuccess,
  createMonsterFailure
}
