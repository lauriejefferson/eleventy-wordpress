const fetch = require('node-fetch');

module.exports = async function () {
  return fetch(`${process.env.CMS}/wp-json/wp/v2/tags`)
    .then((res) => res.json())
    .then((json) => console.log(json));
};
