# base-share
A base social share plugin for jQuery. **Work in progress**

## Services

{{service-doc-start}}

### Facebook (id: facebook)

**Developer Site:** [https://developers.facebook.com/docs/sharing/reference/share-dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)

**Web API:** [https://www.facebook.com/sharer/sharer.php](https://www.facebook.com/sharer/sharer.php)

**Parameters:**

- u: 
- t: 
- pic: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| u             | url           |
| t             | title         |
| pic           | pic           |

### Twitter (id: twitter)

**Developer Site:** [https://dev.twitter.com/web/tweet-button](https://dev.twitter.com/web/tweet-button)

**Web API:** [https://twitter.com/intent/tweet](https://twitter.com/intent/tweet)

**Parameters:**

- url: 
- text: 
- pic: 
- hashtags: 
- via: 
- related: 
- lang: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| text          | title         |
| pic           | pic           |

### Weibo (id: weibo)

**Developer Site:** [http://open.weibo.com/sharebutton](http://open.weibo.com/sharebutton)

**Web API:** [http://service.weibo.com/share/share.php](http://service.weibo.com/share/share.php)

**Parameters:**

- url: 
- title: 
- pic: 
- ralateUid: 
- searchPic: 
- appkey: 
- language: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |

### Qzone (id: qzone)

**Developer Site:** [http://connect.qq.com/intro/share](http://connect.qq.com/intro/share)

**Web API:** [http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey](http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey)

**Parameters:**

- url: 
- title: 
- desc: 
- pics: 
- summary: 
- site: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pics          | pic           |
| desc          | desc          |

### QQ (id: qq)

**Developer Site:** [http://connect.qq.com/intro/sharetoqq/](http://connect.qq.com/intro/sharetoqq/)

**Web API:** [http://connect.qq.com/widget/shareqq/index.html](http://connect.qq.com/widget/shareqq/index.html)

**Parameters:**

- url: 
- title: 
- pics: 
- desc: 
- summary: 
- flash: 
- site: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pics          | pic           |
| desc          | desc          |

### Google+ (id: googleplus)

**Developer Site:** [https://developers.google.com/+/web/share/](https://developers.google.com/+/web/share/)

**Web API:** [https://plus.google.com/share](https://plus.google.com/share)

**Parameters:**

- url: 
- hl: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |

### LinkedIn (id: linkedin)

**Developer Site:** [https://developer.linkedin.com/docs/share-on-linkedin](https://developer.linkedin.com/docs/share-on-linkedin)

**Web API:** [https://www.linkedin.com/shareArticle](https://www.linkedin.com/shareArticle)

**Parameters:**

- url: 
- mini: Required: true; Default: true; 
- title: 
- summary: 
- source: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| summary       | desc          |

### Tieba (id: tieba)

**Developer Site:** []()

**Web API:** [http://tieba.baidu.com/f/commit/share/openShareApi](http://tieba.baidu.com/f/commit/share/openShareApi)

**Parameters:**

- url: 
- title: 
- pic: 
- desc: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |
| desc          | desc          |

### Douban (id: douban)

**Developer Site:** [http://www.douban.com/service/sharebutton](http://www.douban.com/service/sharebutton)

**Web API:** [http://www.douban.com/share/service](http://www.douban.com/share/service)

**Parameters:**

- url: 
- title: 
- pic: 
- text: 
- image: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |
| text          | desc          |

### Renren (id: renren)

**Developer Site:** [http://dev.renren.com/website/?widget=rrshare&content=use](http://dev.renren.com/website/?widget=rrshare&content=use)

**Web API:** [http://widget.renren.com/dialog/share](http://widget.renren.com/dialog/share)

**Parameters:**

- resourceUrl: 
- title: 
- pic: 
- description: 
- srcUrl: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| resourceUrl   | url           |
| title         | title         |
| pic           | pic           |
| description   | desc          |

### Reddit (id: reddit)

**Developer Site:** [http://www.reddit.com/buttons/](http://www.reddit.com/buttons/)

**Web API:** [http://www.reddit.com/submit](http://www.reddit.com/submit)

**Parameters:**

- url: 
- title: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Tumblr (id: tumblr)

**Developer Site:** [https://www.tumblr.com/buttons](https://www.tumblr.com/buttons)

**Web API:** [http://www.tumblr.com/share/link](http://www.tumblr.com/share/link)

**Parameters:**

- url: 
- name: 
- description: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| name          | title         |
| description   | desc          |

### Pinterest (id: pinterest)

**Developer Site:** [https://developers.pinterest.com/pin_it/](https://developers.pinterest.com/pin_it/)

**Web API:** [https://www.pinterest.com/pin/create/button/](https://www.pinterest.com/pin/create/button/)

**Parameters:**

- url: 
- media: 
- description: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| description   | title         |
| media         | pic           |

### Pocket (id: pocket)

**Developer Site:** [http://getpocket.com/publisher/button_docs](http://getpocket.com/publisher/button_docs)

**Web API:** [https://getpocket.com/save](https://getpocket.com/save)

**Parameters:**

- url: 
- title: 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Delicious (id: delicious)

**Developer Site:** [https://delicious.com/tools](https://delicious.com/tools)

**Web API:** [https://delicious.com/save](https://delicious.com/save)

**Parameters:**

- url: 
- title: 
- v: Required: true; Default: 5; 
- provider: 
- noui: 
- jump: close

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Tencent Weibo (id: tweibo)

**Developer Site:** [http://dev.t.qq.com/websites/share/](http://dev.t.qq.com/websites/share/)

**Web API:** [http://share.v.t.qq.com/index.php](http://share.v.t.qq.com/index.php)

**Parameters:**

- url: 
- title: 
- pic: 
- appkey: 
- c: Required: true; Default: share; 
- a: Required: true; Default: index; 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |

{{service-doc-end}}