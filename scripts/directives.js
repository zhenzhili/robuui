/**
 * Created by lizhenzhi on 2016/6/7.
 */
/*
 * @toggleLeftSidebar - Left Sidebar Directive to toggle sidebar navigation
 */
function toggleLeftSidebar() {
    return {
        restrict: 'A',
        template: '<button ng-click="toggleLeft()" class="sidebar-toggle" id="toggle-left"><i class="fa fa-bars"></i></button>',
        controller: function($scope, $element,$window) {
            $scope.toggleLeft = function() {
                ($window.innerWidth > 767) ?
                    angular.element(document.querySelector('#main-wrapper')).toggleClass('sidebar-mini'):
                    angular.element(document.querySelector('#main-wrapper')).toggleClass('sidebar-opened');
            }
        }
    };
}

/*
 * @toggleProfile - Show/Hide Profile View
 */
function toggleProfile() {
    return {
        restrict: 'A',
        template: '<button ng-click="toggleProfile()" type="button" class="btn btn-default" id="toggle-profile"><i class="fa fa-user"></i></button>',
        controller: function($scope, $element) {
            $scope.toggleProfile = function() {
                $('.sidebar-profile').slideToggle();
            }
        }
    };
};

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
        template: '<button ng-click="toggleFullscreen()" type="button" class="btn btn-default expand" id="toggle-fullscreen"><i class="fa fa-expand"></i></button>',
        controller: function($scope, $element) {
            $scope.toggleFullscreen = function() {
                $(document).toggleFullScreen();
                $('#toggle-fullscreen .fa').toggleClass('fa-expand fa-compress');
            }
        }
    };
};

/**
 * @navToggleSub - Directive to toggle sub-menu down
 */
function navToggleSub() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.bind('click',function () {
                element.parent().toggleClass('open');
                element.next().toggleClass('in');
            });


        }
    };
};

angular
    .module('rbAdminAapp')
    .directive('toggleLeftSidebar', toggleLeftSidebar)
    .directive('toggleRightSidebar', toggleRightSidebar)
    .directive('fullscreenMode', fullscreenMode)
    .directive('navToggleSub', navToggleSub)
    .directive('toggleProfile', toggleProfile);