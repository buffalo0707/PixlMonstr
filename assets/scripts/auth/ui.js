'use strict'

const store = require('../store.js')

const changeElementDisplay = (elementClass, action) => {
  let displayStyle = ''
  action === 'show' ? displayStyle = 'block' : displayStyle = 'none'
  const elementArray = document.getElementsByClassName(elementClass)
  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].style.display = displayStyle
  }
}

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('success', data)
  store.user = data.user
  changeElementDisplay('show-signed-in', 'show')
  changeElementDisplay('show-signed-out', 'hide')
  $('#sign-in-modal').modal('hide')
}

const signInFailure = (error) => {
  console.log('failure', error)
}

const signOutSuccess = () => {
  console.log('signOut success ran and nothing was returned')
  store.user = {}
  changeElementDisplay('show-signed-in', 'hide')
  changeElementDisplay('show-signed-out', 'show')
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is:', error)
}

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is:', error)
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
