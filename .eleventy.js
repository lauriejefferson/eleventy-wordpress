const pluginRss = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const util = require('util');
const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/img');

  eleventyConfig.addFilter('md', function (content = '') {
    return markdownIt({ html: true }).render(content);
  });

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromISO(dateObj, { zone: 'utc' }).toFormat('LLLL dd, yyyy');
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!--excerpt-->',
  });

  eleventyConfig.addCollection('blog', function (collection) {
    return collection.getAll().filter((item) => item.data.posts);
  });

  eleventyConfig.addCollection('recentPosts', function (collection) {
    return collection.getFilteredByTag('posts').reverse().slice(0, 3);
  });

  // eleventyConfig.addFilter('recentLinks', function (links) {
  //   return collections.links.reverse().slice(0, 3);
  // });

  eleventyConfig.addFilter('dump', (obj) => {
    return util.inspect(obj);
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
