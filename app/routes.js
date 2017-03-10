const express = require('express');
const request = require('request-promise');
const querystring = require('querystring');

//eslint-disable-next-line
const logger = require('./util/logger');
const config = require('./util/config');

const router = express.Router();

const updateSearches = (req, res, next) => {
  const headers = {
    url: `https://${config.domain}/api/v2/users/${querystring.escape(req.user.sub)}`,
    headers: {
      Authorization: `Bearer ${config.managementToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      user_metadata: {
        saved_searches: req.body
      }
    })
  };

  request(headers)
    .then(() => res.json('ok'))
    .catch(next);
};

router.post('/savedsearches', updateSearches);

module.exports = router;
