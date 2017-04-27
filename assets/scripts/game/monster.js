'use strict'

const Monster = function (id, name, hunger, mood, cleanliness) {
  this.id = id
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.cleanliness = cleanliness
}

Monster.prototype.feed = function () {
  console.log("monster feed is happening. totes cray")
  this.hunger += 1
}

module.exports = {
  Monster
}
