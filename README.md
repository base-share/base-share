# base-share
A base social share plugin for jQuery. **Work in progress**

## Services

{{service-doc-start}}

### Facebook (id: facebook)

- **Developer Site:** [https://developers.facebook.com/docs/sharing/reference/share-dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog)
- **Web API:** [https://www.facebook.com/sharer/sharer.php](https://www.facebook.com/sharer/sharer.php)
- **Parameters:**

  - u: The link to share
  - t: It seems this parameter doesn't work
  - pic: The picture link

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | u             | url           |
  | t             | title         |
  | pic           | pic           |

### Twitter (id: twitter)

- **Developer Site:** [https://dev.twitter.com/web/tweet-button](https://dev.twitter.com/web/tweet-button)
- **Web API:** [https://twitter.com/intent/tweet](https://twitter.com/intent/tweet)
- **Parameters:**

  - url: URL of the page to share
  - text: Default Tweet text
  - hashtags: Comma separated hashtags appended to tweet text
  - via: Screen name of the user to attribute the Tweet to
  - related: Related accounts
  - lang: The language

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | text          | title         |

### Weibo (id: weibo)

- **Developer Site:** [http://open.weibo.com/sharebutton](http://open.weibo.com/sharebutton)
- **Web API:** [http://service.weibo.com/share/share.php](http://service.weibo.com/share/share.php)
- **Parameters:**

  - url: The URL to share
  - title: Default post text
  - pic: The absolute link of a picture to share
  - ralateUid: Related account's uid
  - searchPic: Whether to crawl the pictures in the page
  - appkey: Appkey
  - language: The language

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | pic           | pic           |

### Qzone (id: qzone)

- **Developer Site:** [http://connect.qq.com/intro/share](http://connect.qq.com/intro/share)
- **Web API:** [http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey](http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey)
- **Parameters:**

  - url: The URL to share
  - title: The title of the shared link
  - desc: The default text to say
  - pics: The picture link to share
  - summary: The description of the shared link
  - site: Seem not to work

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | pics          | pic           |
  | summary       | desc          |

### QQ (id: qq)

- **Developer Site:** [http://connect.qq.com/intro/sharetoqq/](http://connect.qq.com/intro/sharetoqq/)
- **Web API:** [http://connect.qq.com/widget/shareqq/index.html](http://connect.qq.com/widget/shareqq/index.html)
- **Parameters:**

  - url: The URL to share
  - title: The title of the shared link
  - desc: The default text to say
  - pics: The picture link to share
  - summary: The description of the shared link
  - flash: The flash link to share
  - site: See not to work

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | pics          | pic           |
  | summary       | desc          |

### Google+ (id: googleplus)

- **Developer Site:** [https://developers.google.com/+/web/share/](https://developers.google.com/+/web/share/)
- **Web API:** [https://plus.google.com/share](https://plus.google.com/share)
- **Parameters:**

  - url: The URL to share
  - hl: The language code

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |

### LinkedIn (id: linkedin)

- **Developer Site:** [https://developer.linkedin.com/docs/share-on-linkedin](https://developer.linkedin.com/docs/share-on-linkedin)
- **Web API:** [https://www.linkedin.com/shareArticle](https://www.linkedin.com/shareArticle)
- **Parameters:**

  - url: The URL to share. At most 1024 characters.
  - mini: Required: true; Default: true; A required argment who's value must always be: true
  - title: The url-encoded title value you wish you use. At most 200 characters
  - summary: The url-encoded description value you wish you use. At most 256 characters
  - source: The url-encoded source of the content (e.g. your website or application name). At most 200 characters

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | summary       | desc          |

### Tieba (id: tieba)

- **Developer Site:** []()
- **Web API:** [http://tieba.baidu.com/f/commit/share/openShareApi](http://tieba.baidu.com/f/commit/share/openShareApi)
- **Parameters:**

  - url: The URL to share
  - title: The topic title
  - pic: The picture link to share
  - desc: The topic content

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | pic           | pic           |
  | desc          | desc          |

### Douban (id: douban)

- **Developer Site:** [http://www.douban.com/service/sharebutton](http://www.douban.com/service/sharebutton)
- **Web API:** [http://www.douban.com/share/service](http://www.douban.com/share/service)
- **Parameters:**

  - url: The URL of the shared content
  - title: The title of the shared content
  - image: The picture link to share
  - text: The description of the shared content

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | image         | pic           |
  | text          | desc          |

### Renren (id: renren)

- **Developer Site:** [http://dev.renren.com/website/?widget=rrshare&content=use](http://dev.renren.com/website/?widget=rrshare&content=use)
- **Web API:** [http://widget.renren.com/dialog/share](http://widget.renren.com/dialog/share)
- **Parameters:**

  - resourceUrl: The URL of the shared content
  - title: The title of the shared content
  - pic: The picture link to share
  - description: The description of the shared content
  - srcUrl: The source URL who's default value is the header' Referrer

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | resourceUrl   | url           |
  | title         | title         |
  | pic           | pic           |
  | description   | desc          |

### Reddit (id: reddit)

- **Developer Site:** [http://www.reddit.com/buttons/](http://www.reddit.com/buttons/)
- **Web API:** [http://www.reddit.com/submit](http://www.reddit.com/submit)
- **Parameters:**

  - url: The URL to share
  - title: The title of the shared content

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |

### Tumblr (id: tumblr)

- **Developer Site:** [https://www.tumblr.com/buttons](https://www.tumblr.com/buttons)
- **Web API:** [http://www.tumblr.com/share/link](http://www.tumblr.com/share/link)
- **Parameters:**

  - url: The URL to share
  - name: The title of the shared content
  - description: The description of the shared content

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | name          | title         |
  | description   | desc          |

### Pinterest (id: pinterest)

- **Developer Site:** [https://developers.pinterest.com/pin_it/](https://developers.pinterest.com/pin_it/)
- **Web API:** [https://www.pinterest.com/pin/create/button/](https://www.pinterest.com/pin/create/button/)
- **Parameters:**

  - url: The URL to share
  - media: The picture link to share
  - description: The title of the shared content

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | description   | title         |
  | media         | pic           |

### Pocket (id: pocket)

- **Developer Site:** [http://getpocket.com/publisher/button_docs](http://getpocket.com/publisher/button_docs)
- **Web API:** [https://getpocket.com/save](https://getpocket.com/save)
- **Parameters:**

  - url: The URL to save
  - title: The picture link to save

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |

### Delicious (id: delicious)

- **Developer Site:** [https://delicious.com/tools](https://delicious.com/tools)
- **Web API:** [https://delicious.com/save](https://delicious.com/save)
- **Parameters:**

  - url: The URL to share
  - title: The title of the shared content
  - v: Required: true; Default: 5; 
  - provider: Such as your company name
  - noui: Required: true; 
  - jump: Required: true; Default: close; 

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |

### Tencent Weibo (id: tweibo)

- **Developer Site:** [http://dev.t.qq.com/websites/share/](http://dev.t.qq.com/websites/share/)
- **Web API:** [http://share.v.t.qq.com/index.php](http://share.v.t.qq.com/index.php)
- **Parameters:**

  - url: The URL to share
  - title: The text to post
  - pic: The picture link to share
  - appkey: Required: true; You need register an Tencent Weibo account to get an AppKey
  - c: Required: true; Default: share; 
  - a: Required: true; Default: index; 

- **Parameter Map:**

  | Original      | Standard      |
  | ------------- | ------------- |
  | url           | url           |
  | title         | title         |
  | pic           | pic           |

{{service-doc-end}}