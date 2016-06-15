/**
 * Created by lizhenzhi on 2016/6/7.
 */

/*
 * @toggleRightSidebar - Right Sidebar Directive to toggle sidebar navigation
 */
function toggleRightSidebar() {
    return {
        restrict: 'A',
        template: '<button ng-click="toggleRight()" class="sidebar-toggle" id="toggle-right"><i class="fa fa-indent"></i></button>',
        controller: function($scope, $element) {
            $scope.toggleRight = function() {
                $('#sidebar-right').toggleClass("sidebar-right-open");
                $("#toggle-right .fa").toggleClass("fa-indent fa-dedent");
            }
        }
    };
};

/**
 * @fullscreenMode - Directive for fullscreen browsers
 */

function fullscreenMode() {
    return {
        restrict: 'A',
        template: '<button ng-click="toggleFullscreen()" type="button" class="btn btn-default expand" id="toggle-fullscreen"><i class="fa" ng-class="{\'fa-expand\':!$parent.$root.isFullscreen,\'fa-compress\':$parent.$root.isFullscreen}"></i></button>',
        controller: function($scope, $element,Fullscreen) {
            $scope.toggleFullscreen = function() {
                if (Fullscreen.isEnabled()){
                    Fullscreen.cancel();
                }
                else{
                    Fullscreen.all();
                }
                $scope.$parent.$root.isFullscreen=!$scope.$parent.$root.isFullscreen;
            }
        }
    };
};

angular
    .module('rbAdminAapp')
    .directive('fullscreenMode', fullscreenMode);