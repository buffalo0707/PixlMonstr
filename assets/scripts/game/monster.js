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
                          status) {
  this.id = id
  this.name = name
  this.hunger = hunger
  this.mood = mood
  this.type = type
  this.cleanliness = cleanliness
  this.updated_at = updatedAt
  this.status = status
}

Monster.prototype.feed = function () {
  if (this.status === 'dead') {
    return
  }
  if (this.hunger < 5) {
    this.hunger += 1
  }
}

Monster.prototype.clean = function () {
  if (this.status === 'dead') {
    return
  }
  if (this.cleanliness < 5) {
    this.cleanliness += 1
  }
}

Monster.prototype.hoursSinceUpdate = function () {
  const today = new Date()
  const upatedDate = new Date(this.updated_at)
  let dateDiff = today.getTime() - upatedDate.getTime()
  dateDiff /= 1000
  dateDiff /= 60
  dateDiff /= 60
  return Math.floor(dateDiff)
}

Monster.prototype.eatAndPoop = function () {
  const hours = this.hoursSinceUpdate()
  const startHunger = this.hunger
  const startCleanliness = this.cleanliness
  const eatRate = 1
  const poopRate = 1

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
  if (hours >= 16) {
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
