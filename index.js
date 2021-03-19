require('dotenv').config();
const SlackBot = require('slackbots');
const axios = require('axios');

const bot = SlackBot({
token: '',
name: 'subAccessBot'
});
