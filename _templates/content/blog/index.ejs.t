---
to: "<%= h.src() %>/pages/blog/<%= slug %>.mdx"
---
---
title: "<%= h.inflection.titleize(title) %>"
layout: "blog-post"
createdAt: "<%= date %>"
publishedAt: "<%= date %>"
draft: true
---
