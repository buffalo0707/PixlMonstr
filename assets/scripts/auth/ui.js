'use strict'

const store = require('../store.js')
const gameUi = require('../game/ui.js')

const changeElementDisplay = (elementClass, action) => {
  let displayStyle = ''
  action === 'show' ? displayStyle = 'block' : displayStyle = 'none'
  const elementArray = document.getElementsByClassName(elementClass)
  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].style.display = displayStyle
  }
}

const signUpSuccess = (data) => {
  $('#sign-up-modal').modal('hide')
}

const signUpFailure = () => {
  $('#sign-up-alert').show()
}

const signInSuccess = (data) => {
  console.log('success', data)
  store.user = data.user
  changeElementDisplay('show-signed-in', 'show')
  changeElementDisplay('show-signed-out', 'hide')
  $('#sign-in-modal').modal('hide')
  gameUi.getMonsters()
}

const signInFailure = () => {
  $('#sign-in-alert').show()
}

const signOutSuccess = () => {
  console.log('signOut success ran and nothing was returned')
  store.user = {}
  changeElementDisplay('show-signed-in', 'hide')
  changeElementDisplay('logout-hide', 'hide')
  changeElementDisplay('show-signed-out', 'show')
  $('.content').empty()

}

const signOutFailure = (error) => {

}

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is:', error)
  $('#change-password-alert').show()
}

module.exports = {
  changeElementDisplay,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
