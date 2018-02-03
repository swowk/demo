//page-slide.js
//页面滑动
//使用格式
//$.pageSlide(amount, {wrapper : "wrapper"})
//参数一 amount 为页面数，参数二 配置项 wrapper 为包裹 DOM 节点


//鼠标滚动事件
addEvent = (function (window, undefined) {        
    var _eventCompat = function(event) {
        var type = event.type;
        if (type == 'DOMMouseScroll' || type == 'mousewheel') {
            event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        }
        //alert(event.delta);
        if (event.srcElement && !event.target) {
            event.target = event.srcElement;    
        }
        if (!event.preventDefault && event.returnValue !== undefined) {
            event.preventDefault = function() {
                event.returnValue = false;
            };
        }
        /* 
        ......其他一些兼容性处理 */
        return event;
    };
    if (window.addEventListener) {
        return function(el, type, fn, capture) {
            if (type === "mousewheel" && document.mozFullScreen !== undefined) {
                type = "DOMMouseScroll";
            }
            el.addEventListener(type, function(event) {
                fn.call(this, _eventCompat(event));
            }, capture || false);
        }
    } else if (window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent("on" + type, function(event) {
                event = event || window.event;
                fn.call(el, _eventCompat(event));    
            });
        }
    }  
})(window);


(function($) {
    function PageSlide(amount, options) {
        this.amount = amount;
        this.opts = $.extend({}, PageSlide.DEFAULTS, options);
        this._active();
    }

    PageSlide.DEFAULTS = {
        wrapper : "wrapper"
    };

    PageSlide.prototype._active = function() {
        var amount = this.amount,
            opts = this.opts,
            iTime,
            curMove = 0,
            $wrapper = $("." + opts.wrapper),
            heightSections = $wrapper.height() / amount;

        $(window).resize(function() {
            curMove = (curMove / heightSections) * ($wrapper.height() / amount);
            $wrapper.css("transform", "matrix(1, 0, 0, 1, 0, " + curMove + ")");
            heightSections = $wrapper.height() / amount;
            $(".fit-height").css("height", heightSections);
        });

        addEvent($("body")[0], "mousewheel", function(event) {
            clearTimeout(iTime);
            iTime = setTimeout(function() {
                curMove = $wrapper.css("transform").match(/-?\d+\)/)[0].slice(0, -1);
                if (event.delta < 0) { 
                    curMove = Math.max(Number(curMove) - heightSections, -($wrapper.height() - heightSections));
                    $wrapper.css("transform", "matrix(1, 0, 0, 1, 0, " + curMove + ")");
                } else {
                    curMove = Math.min(Number(curMove) + heightSections, 0);
                    $wrapper.css("transform", "matrix(1, 0, 0, 1, 0, " + curMove + ")");
                }
            }, 60);
        });
    };

    $.extend({pageSlide : function(amount, opts) {
        new PageSlide(amount, opts);
    }});
})(jQuery);