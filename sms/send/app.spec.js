﻿const assert = require('assert')
const rewire = require('rewire')
const app = rewire('./app.js')

it('should have credentials', function () {
  try {
    const nexmo = app.__get__('nexmo')
    assert.notEqual(nexmo.credentials.apiKey, 'API_KEY')
    assert.notEqual(nexmo.credentials.apiKey, 'API_SECRET')
  } catch (error) {
    printMessage('Hint 💡', 'You need to set the API_KEY and API_SECRET')
    throw error
  }
})

it('should have a to number', function () {
  try {
    const to = app.__get__('to')
    assert.notEqual(to, 'TO_NUMBER')
  } catch (error) {
    printMessage('Hint 💡', 'You need to set the TO_NUMBER. You should use your own number for testing.')
    throw error
  }
})

it('should have a valid to number', function () {
  try {
    const to = app.__get__('to')
    assert.ok(/^[1-9]\d{1,14}$/.test(to))
  } catch (error) {
    printMessage('Hint 💡', 'It looks like the number you are sending to is not valid!')
    throw error
  }
})

it('should have text', function () {
  try {
    const to = app.__get__('to')
    assert.notEqual(text, '')
  } catch (error) {
    printMessage('Hint 💡', 'You should provide some text.')
    throw error
  }
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"')
}
