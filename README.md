# base-share
A base social share plugin for jQuery(optional). **Work in progress**

## Services

{{start}}

### Facebook

**Developer Site:** [https://developers.facebook.com/docs/sharing/reference/share-dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)

**Web API:** [https://www.facebook.com/sharer/sharer.php](https://www.facebook.com/sharer/sharer.php)

**Parameters:**

- **u:** 
- **t:** 
- **pic:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | u             |
| title         | t             |
| pic           | pic           |

### Twitter

**Developer Site:** [https://dev.twitter.com/web/tweet-button](https://dev.twitter.com/web/tweet-button)

**Web API:** [https://twitter.com/intent/tweet](https://twitter.com/intent/tweet)

**Parameters:**

- **url:** 
- **text:** 
- **pic:** 
- **hashtags:** 
- **via:** 
- **related:** 
- **lang:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | text          |
| pic           | pic           |

### Weibo

**Developer Site:** [http://open.weibo.com/sharebutton](http://open.weibo.com/sharebutton)

**Web API:** [http://service.weibo.com/share/share.php](http://service.weibo.com/share/share.php)

**Parameters:**

- **url:** 
- **title:** 
- **pic:** 
- **ratateUid:** 
- **searchPic:** 
- **appkey:** 
- **language:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |

### Qzone

**Developer Site:** [http://connect.qq.com/intro/share](http://connect.qq.com/intro/share)

**Web API:** [http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey](http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey)

**Parameters:**

- **url:** 
- **title:** 
- **desc:** 
- **pics:** 
- **summary:** 
- **site:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pics          |
| desc          | desc          |

### QQ

**Developer Site:** [http://connect.qq.com/intro/sharetoqq/](http://connect.qq.com/intro/sharetoqq/)

**Web API:** [http://connect.qq.com/widget/shareqq/index.html](http://connect.qq.com/widget/shareqq/index.html)

**Parameters:**

- **url:** 
- **title:** 
- **pics:** 
- **desc:** 
- **summary:** 
- **flash:** 
- **site:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pics          |
| desc          | desc          |

### Wechat

**Developer Site:** [http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E5.88.86.E4.BA.AB.E6.8E.A5.E5.8F.A3](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E5.88.86.E4.BA.AB.E6.8E.A5.E5.8F.A3)

**Web API:** []()

**Parameters:**


**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |

### Google+

**Developer Site:** [https://developers.google.com/+/web/share/](https://developers.google.com/+/web/share/)

**Web API:** [https://plus.google.com/share](https://plus.google.com/share)

**Parameters:**

- **url:** 
- **hl:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |

### LinkedIn

**Developer Site:** [https://developer.linkedin.com/docs/share-on-linkedin](https://developer.linkedin.com/docs/share-on-linkedin)

**Web API:** [https://www.linkedin.com/shareArticle](https://www.linkedin.com/shareArticle)

**Parameters:**

- **url:** 
- **mini:** Required: true; Default: true; 
- **title:** 
- **summary:** 
- **source:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| desc          | summary       |

### Tieba

**Developer Site:** []()

**Web API:** [http://tieba.baidu.com/f/commit/share/openShareApi](http://tieba.baidu.com/f/commit/share/openShareApi)

**Parameters:**

- **url:** 
- **title:** 
- **pic:** 
- **desc:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |
| desc          | desc          |

### Douban

**Developer Site:** [http://www.douban.com/service/sharebutton](http://www.douban.com/service/sharebutton)

**Web API:** [http://www.douban.com/share/service](http://www.douban.com/share/service)

**Parameters:**

- **url:** 
- **title:** 
- **pic:** 
- **text:** 
- **image:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |
| desc          | text          |

### Renren

**Developer Site:** [http://dev.renren.com/website/?widget=rrshare&content=use](http://dev.renren.com/website/?widget=rrshare&content=use)

**Web API:** [http://widget.renren.com/dialog/share](http://widget.renren.com/dialog/share)

**Parameters:**

- **resourceUrl:** 
- **title:** 
- **pic:** 
- **description:** 
- **srcUrl:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | resourceUrl   |
| title         | title         |
| pic           | pic           |
| desc          | description   |

### Reddit

**Developer Site:** [http://www.reddit.com/buttons/](http://www.reddit.com/buttons/)

**Web API:** [http://www.reddit.com/submit](http://www.reddit.com/submit)

**Parameters:**

- **url:** 
- **title:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Tumblr

**Developer Site:** [https://www.tumblr.com/buttons](https://www.tumblr.com/buttons)

**Web API:** [http://www.tumblr.com/share/link](http://www.tumblr.com/share/link)

**Parameters:**

- **url:** 
- **name:** 
- **description:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | name          |
| desc          | description   |

### Pinterest

**Developer Site:** [https://developers.pinterest.com/pin_it/](https://developers.pinterest.com/pin_it/)

**Web API:** [https://www.pinterest.com/pin/create/button/](https://www.pinterest.com/pin/create/button/)

**Parameters:**

- **url:** 
- **media:** 
- **description:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | description   |
| pic           | media         |

### Pocket

**Developer Site:** [http://getpocket.com/publisher/button_docs](http://getpocket.com/publisher/button_docs)

**Web API:** [https://getpocket.com/save](https://getpocket.com/save)

**Parameters:**

- **url:** 
- **title:** 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Delicious

**Developer Site:** [https://delicious.com/tools](https://delicious.com/tools)

**Web API:** [https://delicious.com/save](https://delicious.com/save)

**Parameters:**

- **url:** 
- **title:** 
- **v:** Required: true; Default: 5; 
- **provider:** 
- **noui:** 
- **jump:** close

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |

### Tencent Weibo

**Developer Site:** [http://dev.t.qq.com/websites/share/](http://dev.t.qq.com/websites/share/)

**Web API:** [http://share.v.t.qq.com/index.php](http://share.v.t.qq.com/index.php)

**Parameters:**

- **url:** 
- **title:** 
- **pic:** 
- **appkey:** 
- **c:** Required: true; Default: share; 
- **a:** Required: true; Default: index; 

**Parameter Map:**

| Standard      | Original      |
| ------------- | ------------- |
| url           | url           |
| title         | title         |
| pic           | pic           |

{{end}}