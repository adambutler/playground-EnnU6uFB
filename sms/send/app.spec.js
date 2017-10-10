﻿const assert = require('assert')
const rewire = require('rewire')
const app = rewire('./app.js')

it('should have data', function () {
  try {
    const nexmo = app.__get__('nexmo')
    assert.notEqual(nexmo.credentials.apiKey, 'API_KEY')
    assert.notEqual(nexmo.credentials.apiKey, 'API_SECRET')
  } catch (error) {
    printMessage('Hint 💡', 'You need to set the API_KEY and API_SECRET')
    throw error
  }
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"')
}
