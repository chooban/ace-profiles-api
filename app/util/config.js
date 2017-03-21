const fs = require('fs');

const config = {
  domain: '',
  secret: '',
  audience: '',
  managementToken: ''
};

if (process.env.SECRET) {
  config.secret = process.env.SECRET;
  config.audience = process.env.AUDIENCE;
  config.managementToken = process.env.MANAGEMENT;
  config.domain = process.env.DOMAIN;
} else {
  config.secret = fs.readFileSync('/run/secrets/auth0_client_secret', 'utf8').trim();
  config.audience = fs.readFileSync('/run/secrets/auth0_client_id', 'utf8').trim();
  config.managementToken = fs.readFileSync('/run/secrets/auth0_management_token', 'utf8').trim();
  config.domain = fs.readFileSync('/run/secrets/auth0_domain', 'utf8').trim();
}

module.exports = config;
