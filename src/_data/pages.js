const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function () {
  return fetch(
    `${process.env.CMS}/wp-json/wp/v2/pages?_fields=id,title,date,slug,content,tags,acf&per_page=100`
  )
    .then((res) => res.json())
    .then((json) => json);
};
