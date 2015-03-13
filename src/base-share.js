/*!
 * base-share - A basic social share jQuery(optional) plugin
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
    factory(global.jQuery, global);
  }
}(this, function ($, global) {

  'use strict';

  var SERVICES = {
    weibo: {
      api: 'http://v.t.sina.com.cn/share/share.php?url={url}&title={title}&ralateUid={ralateuid}'
    },
    qzone: {
      api: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}'
    },
    twitter: {
      api: 'https://twitter.com/intent/tweet?url={url}&text={title}'
    }
  };

  var win = window;
  var doc = document;

  var defaults = {
    isPopup: false,
    width: 600,
    height: 500,
    itemClass: 'base-share-item',
    dataApiPrefix: 'data-'
  };

  var keys;

  if (Object.keys) {
    keys = function(obj) {
      if (obj != null) {
        return Object.keys(obj);
      } else {
        return [];
      }
    };
  } else {
    keys = function(obj) {
      var res = [];
      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          res.push(p);
        }
      }
      return res;
    };
  }

  var isPlainObject = function(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  };

  var isEmptyObject = function(o) {
    return isPlainObject(o) && keys(o).length === 0;
  };

  var extend = function(to, from, deep) {
    for (var p in from) {
      if (from.hasOwnProperty(p)) {
        if (deep && isPlainObject(to[p]) && isPlainObject(from[p])) {
          to[p] = extend(to[p], from[p], true);
        } else {
          to[p] = from[p];
        }
      }
    }
    return to;
  };

  var hasClass = function(elem, cls) {
    return (' ' + elem.className + ' ').indexOf(' ' + cls + ' ') > -1;
  };

  var dataAttr = function(elem, attr, value) {
    if (value === void 0) {
      return elem.getAttribute('data-' + attr);
    } else {
      elem.setAttribute('data-' + attr, value);
    }
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

  var addEvent;

  if (doc.addEventListener) {
    addEvent = function(elem, type, listener, useCapture) {
      elem.addEventListener(type, listener, !!useCapture);
    };
  } else if (doc.attachEvent) {
    addEvent = function(elem, type, listener) {
      elem[type + listener] = function() {
        var e = win.event;
        e.target = e.srcElement;
        e.preventDefault = function() {
          e.returnValue = false;
        };
        e.stopPropagation = function() {
          e.cancelBubble = true;
        };
        listener.call(elem, e);
      };
      elem.attachEvent('on' + type, elem[type + listener]);
    };
  }

  var tmplReplace = function(tmpl, data) {
    var dataKeys = keys(data);
    for (var i = 0; i < dataKeys.length; i++) {
      tmpl = tmpl.replace('{' + dataKeys[i] + '}', encodeURIComponent(data[dataKeys[i]]));
    }
    return tmpl;
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

    win.open.apply(win, popupParams);
  };

  var baseShare = function(shareList, opts) {
    opts = extend({}, extend(defaults, opts));

    var basicParam = getParam(shareList, opts.dataApiPrefix);

    addEvent(shareList, 'click', function(e) {
      var target = e.target;

      var id;
      var url;
      var param;

      if (hasClass(target, opts.itemClass) && !isEmptyObject(basicParam)) {
        param = getParam(target, opts.dataApiPrefix);
        param = extend(basicParam, param);
        id = dataAttr(target, 'id');
        url = tmplReplace(SERVICES[id].api, param);

        opts.url = url;
        openUrl(opts);
      }
    });
  };

  if ($ && $.fn) {
    $.fn.baseShare = function(opts) {
      this.each(function(shareList) {
        baseShare(shareList, opts);
      });
    };
  } else if (global) {
    global.baseShare = baseShare;
  }

  return baseShare;
}));