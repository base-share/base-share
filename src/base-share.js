/*!
 * base-share - A basic social share jQuery plugin
 * https://github.com/Alex1990/base-share
 * Under the MIT license | (c) 2015 Alex Chao
 */

!(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(global.jQuery);
  }
}(this, function ($) {

  'use strict';

  var SERVICES = {
    /*service-url-start*/
    facebook: {
      api: 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}'
    },
    twitter: {
      api: 'https://twitter.com/intent/tweet?url={url}&text={title}&pic={pic}&hashtags={hashtags}&via={via}&related={related}&lang={lang}'
    },
    weibo: {
      api: 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&ralateUid={ralateuid}&searchPic={searchpic}&appkey={appkey}&language={language}'
    },
    qzone: {
      api: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&desc={desc}&pics={pic}&summary={summary}&site={site}'
    },
    qq: {
      api: 'http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&pics={pic}&desc={desc}&summary={summary}&flash={flash}&site={site}'
    },
    wechat: {
      api: '?link={url}&title={title}&desc={desc}&imgUrl={pic}&type={type}&dataUrl={dataurl}'
    },
    googleplus: {
      api: 'https://plus.google.com/share?url={url}&hl={hl}'
    },
    linkedin: {
      api: 'https://www.linkedin.com/shareArticle?url={url}&mini=true&title={title}&summary={desc}&source={source}'
    },
    tieba: {
      api: 'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&pic={pic}&desc={desc}'
    },
    douban: {
      api: 'http://www.douban.com/share/service?url={url}&title={title}&pic={pic}&text={desc}&image={image}'
    },
    renren: {
      api: 'http://widget.renren.com/dialog/share?resourceUrl={url}&title={title}&pic={pic}&description={desc}&srcUrl={srcurl}'
    },
    reddit: {
      api: 'http://www.reddit.com/submit?url={url}&title={title}'
    },
    tumblr: {
      api: 'http://www.tumblr.com/share/link?url={url}&name={title}&description={desc}'
    },
    pinterest: {
      api: 'https://www.pinterest.com/pin/create/button/?url={url}&media={pic}&description={title}'
    },
    pocket: {
      api: 'https://getpocket.com/save?url={url}&title={title}'
    },
    delicious: {
      api: 'https://delicious.com/save?url={url}&title={title}&v=5&provider={provider}&noui={noui}&jump={jump}'
    },
    tweibo: {
      api: 'http://share.v.t.qq.com/index.php?url={url}&title={title}&pic={pic}&appkey={appkey}&c=share&a=index'
    }
    /*service-url-end*/
  };

  var defaults = {
    isPopup: false,
    width: 650,
    height: 500,
    listSelector: '.base-share-list',
    itemSelector: '.base-share-item',
    dataApiPrefix: 'data-',
    beforeshare: function(){ return true; }
  };

  var keys = Object.keys || function(o) {
    var res = [];
    for (var p in o) {
      if (o.hasOwnProperty[p]) {
        res.push(p);
      }
    }
    return res;
  };


  var getParam = function(elem, dataApiPrefix) {
    var obj = {};
    var attrs = elem.attributes;

    for (var i = 0, len = attrs.length; i < len; i++) {
      if (attrs[i].name.indexOf(dataApiPrefix) === 0) {
        obj[attrs[i].name.slice(dataApiPrefix.length)] = attrs[i].value;
      }
    }

    return obj;
  };

  var serviceTmpl = function(tmpl, data) {
    var dataKeys = keys(data);
    for (var i = 0; i < dataKeys.length; i++) {
      tmpl = tmpl.replace('{' + dataKeys[i] + '}', encodeURIComponent(data[dataKeys[i]]));
    }
    return tmpl.replace(/(\?|&)[^?&]*?=\{.*?\}/g, '$1');
  };

  var openUrl = function(opts) {
    var top;
    var left;
    var popupParams = [];

    popupParams[0] = opts.url;

    if (opts.isPopup) {
      popupParams[1] = opts.windowName;
      top = opts.top || (screen.availWidth - opts.width) / 2;
      left = opts.left || (screen.availHeight - opts.height) / 2;
    }

    popupParams.push('top=' + top + ',left=' + left + ',width=' + opts.width + ',height=' + opts.height);

    window.open.apply(window, popupParams);
  };

  var baseShare = function(delegator, opts) {
    opts = $.extend({}, defaults, opts);

    var listener = function() {
      var $this = $(this);
      var $shareList = $this.closest(opts.listSelector);

      var id = $this.data('id');
      var param = $.extend(
        getParam($shareList[0], opts.dataApiPrefix),
        getParam(this, opts.dataApiPrefix)
      );

      opts.url = serviceTmpl(SERVICES[id].api, param);
      if (opts.beforeshare(this, param)) {
        openUrl(opts);
      }
    };

    $(delegator).on('click', opts.itemSelector, listener);

  };

  $.fn.baseShare = function(opts) {
    this.each(function(i, delegator) {
      baseShare(delegator, opts);
    });
  };

}));