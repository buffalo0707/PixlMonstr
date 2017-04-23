'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetMonsters = function () {
  event.preventDefault()
  api.getMonsters()
  .then(ui.getMonstersSuccess)
  .catch(ui.getMonstersFailures)
}

const addHandlers = () => {
$('#get-monsters').on('click', onGetMonsters)
}

module.exports = {
  addHandlers,
}
