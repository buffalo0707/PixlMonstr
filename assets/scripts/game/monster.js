'use strict'

const Monster = function (id, name, hunger, mood, cleanliness) {
  this.id = id
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.cleanliness = cleanliness
}

Monster.prototype.feed = function () {
  if (this.hunger < 15) {
    this.hunger += 1
  }
}

Monster.prototype.clean = function () {
  console.log('cleaning!')
  if (this.cleanliness < 15) {
    this.cleanliness += 1
  }
}

Monster.prototype.play = function () {
  console.log('playing!')
  if (this.mood < 15) {
    this.mood += 1
  }
}

module.exports = {
  Monster
}
