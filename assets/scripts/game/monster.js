'use strict'

const Monster = function (id, name, hunger, mood, cleanliness, type, updatedAt) {
  this.id = id
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.type = type
  this.cleanliness = cleanliness
  this.updated_at = updatedAt

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

Monster.prototype.hoursSinceUpdate = function () {
  const today = new Date()
  const upatedDate = new Date(this.updated_at)
  let dateDiff = today.getTime() - upatedDate.getTime()
  dateDiff /= 1000
  dateDiff /= 60
  dateDiff /= 60
  return dateDiff
}

module.exports = {
  Monster
}
