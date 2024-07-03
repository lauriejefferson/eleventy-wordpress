<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,shrink-to-fit=no" />
        <title>
        RSS Feed |
          <xsl:value-of select="/rss/channel/title"/>
        </title>
        <style type="text/css">
                    body {
                        color: #222;
                        font-family: "Segoe UI", apple-system, BlinkMacSystemFont, Futura, Roboto, Arial, system-ui, sans-serif;
                    }
                    .container {
                        align-item: center;
                        display: flex;
                        justify-content: center;
                    }
                    .item {
                        max-width: 768px;
                    }
                    a {
                        color: #4166f5;
                        text-decoration: none;
                    }
                    a:visited {
                        color: #3f00ff;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                </style>
      </head>
      <body>
        <p>
        This is an RSS feed. Visit
          <a href="https://aboutfeeds.com">About Feeds</a>
        to learn more and get started. It’s free.
        </p>
        <h1>Recent blog posts</h1>
        <xsl:for-each select="/rss/channel/item">
          <a>
            <xsl:attribute name="href">
              <xsl:value-of select="link"/>
            </xsl:attribute>
            <xsl:value-of select="title"/>
          </a>
          <xsl:value-of select="summary"/>
        Last updated:
          <xsl:value-of select="date" />
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>