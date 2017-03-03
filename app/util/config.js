'use strict';

const fs = require('fs');

const config = {
  secret: '',
  audience: ''
};

if (process.env.SECRET) {
  config.secret = process.env.SECRET;
  config.audience = process.env.AUDIENCE;
} else {
  config.secret = fs.readFileSync('/run/secrets/auth0_client_secret', 'utf8').trim();
  config.audience = fs.readFileSync('/run/secrets/auth0_client_id', 'utf8').trim();
}

module.exports = config;
