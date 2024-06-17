const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function () {
  return fetch(
    `${process.env.CMS}/wp-json/wp/v2/tags?_fields=id,slug,name,description&per_page=100`
  )
    .then((res) => res.json())
    .then((json) => json);
};
