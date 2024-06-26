const { feedPlugin } = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const util = require('util');
const { DateTime } = require('luxon');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPlugin(feedPlugin, {
    type: 'rss',
    outputPath: '/rss.xml',
    collection: {
      name: 'posts',
      limit: 10,
    },
    metadata: {
      language: 'en',
      title: "Laurie's Digital Collection",
      subtitle: 'A blog about my random thoughts and cool links to websites',
      author: {
        name: 'Laurie Jefferson',
        email: 'joyfulnoiseforyahshua@gmail.com',
      },
    },
  });

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

  eleventyConfig.addCollection('recentPosts', function (collection) {
    return collection.getAll()[0].data.posts;
  });

  eleventyConfig.addCollection('recentLinks', function (collection) {
    return collection.getFilteredByTag('post').reverse().slice(0, 2);
  });

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
