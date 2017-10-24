﻿const assert = require('assert')
const rewire = require('rewire')
const app = rewire('./app.js')

let passed = true

console.log('\nTECHIO> redirect-streams null')

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
    const text = app.__get__('text')
    assert.notEqual(text, '')
  } catch (error) {
    printMessage('Hint 💡', 'You should provide some text.')
    throw error
  }
})

// Allow nexmo.message.sendSms 5000ms to complete
setTimeout(function(){
  if (passed) {
    console.log('\nTECHIO> redirect-streams --reset')
    console.log('\nTECHIO> message "Great job! You should receive an SMS momentarily."')
  }

  process.exit()
}, 5000)

function printMessage(channel, message) {
  if (passed) {
    passed = false
    console.log('\nTECHIO> redirect-streams --reset')
    console.log('\nTECHIO> message "Uh oh. Looks like something went wrong! Check out the hints below:"')
    console.log('\nTECHIO> redirect-streams null')
  }
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"')
}
