/**
 * Created by lizhenzhi on 2016/6/14.
 */
angular
    .module('rbAdminAapp')
    .animation('.slide-toggle', ['$animateCss', function($animateCss) {
        var styleKeys=['height','padding-top','padding-bottom','margin-top','margin-bottom'];
        var getAnimate=function (element,isShow) {
            var currentStyle=window.getComputedStyle(element[0],null);
            var from={},to={};
            for(var i=0,len=styleKeys.length;i<len;i++){
                from[styleKeys[i]]=currentStyle[styleKeys[i]]=='auto'?(element[0].offsetHeight+'px'):currentStyle[styleKeys[i]];
                to[styleKeys[i]]='0px';
            }
            if(isShow){
                return $animateCss(element, {
                    from: to,
                    to: from
                });
            }
            else{
                return $animateCss(element, {
                    from: from,
                    to: to
                });
            }
        };
        var clearStyle=function (element) {
            for(var i=0,len=styleKeys.length;i<len;i++){
                element.style[styleKeys[i]]='';
            }
        }
        return {
            addClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
                    var animator = getAnimate(element,false);
                    if (animator) {
                        return animator.start().finally(function() {
                            clearStyle(element[0]);
                            doneFn();
                        });
                    }
                }
                doneFn();
            },
            removeClass: function(element, className, doneFn) {
                if (className == 'ng-hide') {
                    var animator = getAnimate(element,true);
                    if (animator) {
                        return animator.start().finally(function () {
                            clearStyle(element[0]);
                            doneFn();
                        });
                    }
                }
                doneFn();
            }
    };
}])