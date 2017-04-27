'use strict'

const Monster = function (name, hunger, mood, cleanliness) {
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.cleanliness = cleanliness
}

Monster.prototype.feed = function () {
  this.hunger += 1
}

module.exports = {
  Monster
}
