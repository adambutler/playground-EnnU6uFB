const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'API_KEY',
  apiSecret: 'API_SECRET'
});

const from = 'Nexmo';
const to = 'TO_NUMBER';
const text = 'A text message sent using the Nexmo SMS API';

nexmo.message.sendSms(from, to, text, (error, response) => {
  if(error) {
    throw error;
  } else if(response.messages[0].status != '0') {
    console.log(response);
    throw 'Nexmo returned back a non-zero status';
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});
