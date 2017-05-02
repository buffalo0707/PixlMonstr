'use strict'

const Monster = function (id,
                          name,
                          hunger,
                          mood,
                          cleanliness,
                          type,
                          updatedAt,
                          eatRate,
                          poopRate,
                          boredRate,
                          status,
                          home,
                          createdAt) {
  this.id = id
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.type = type
  this.cleanliness = cleanliness
  this.updated_at = updatedAt
  this.status = status
  this.home = home
  this.created_at = createdAt
}

Monster.prototype.feed = function () {
  if (this.status === 'dead') {
    return
  }
  this.hunger += 1
}

Monster.prototype.clean = function () {
  if (this.status === 'dead') {
    return
  }
  this.cleanliness += 1
}

Monster.prototype.hoursSinceUpdate = function () {
  const today = new Date()
  const updatedDate = new Date(this.updated_at)
  let dateDiff = today.getTime() - updatedDate.getTime()
  dateDiff /= 1000
  dateDiff /= 60
  dateDiff /= 60
  return Math.floor(dateDiff)
}

Monster.prototype.hoursSinceCreated = function () {
  const today = new Date()
  const createdDate = new Date(this.created_at)
  let dateDiff = today.getTime() - createdDate.getTime()
  dateDiff /= 1000
  dateDiff /= 60
  dateDiff /= 60
  return Math.floor(dateDiff)
}

Monster.prototype.grow = function () {
  const hours = this.hoursSinceCreated()
  let size = (hours / 24) - (hours % 24)
  if (size > 5) size = 5
  if (size < 0) size = 0
  console.log(size);
  return size
}

Monster.prototype.eatAndPoop = function () {
  const hours = this.hoursSinceUpdate()
  const startHunger = this.hunger
  const startCleanliness = this.cleanliness
  const eatRate = 1
  const poopRate = 1
  if (hours >= 2) {
    this.hunger -= eatRate
    this.cleanliness -= poopRate
  }
  if (hours >= 4) {
    this.hunger -= eatRate
    this.cleanliness -= poopRate
  }
  if (hours >= 8) {
    this.hunger -= eatRate
    this.cleanliness -= poopRate
  }
  if (hours >= 12) {
    this.hunger -= eatRate
    this.cleanliness -= poopRate
  }
  if (hours >= 20) {
    this.hunger -= eatRate
    this.cleanliness -= poopRate
  }
  if (this.hunger < 0) {
    this.hunger = 0
  }
  if (this.cleanliness < 0) {
    this.cleanliness = 0
  }
  if (this.hunger === startHunger &&
      this.cleanliness === startCleanliness) return false
  return true
}

module.exports = {
  Monster
}
