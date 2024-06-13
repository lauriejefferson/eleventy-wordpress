const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function () {
  return fetch(`${process.env.CMS}/wp-json/wp/v2/posts/`, { method: 'GET' })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
