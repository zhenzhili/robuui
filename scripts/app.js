/**
 * Created by lizhenzhi on 2016/5/28.
 */
angular
    .module('rbAdminAapp', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'uiSwitch',
        'ngAnimate',
        'FBAngular'
    ])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
        $stateProvider
            .state('index', {
                url: "/index",
                templateUrl: "views/index.html",
                data: {
                    pageTitle: 'index'
                }
            })
            .state('ui', {
                abstract: true,
                url: "/ui",
                templateUrl: "views/common.html",
            })
            .state('ui.buttons', {
                url: "/buttons",
                templateUrl: "views/ui-buttons.html",
                data: {
                    pageTitle: 'Buttons'
                }
            });
    }])
    .run(['$rootScope',function ($rootScope) {
        $rootScope.isFullscreen=false;
        $rootScope.$on('$viewContentLoaded', function() {
            angular.element(window).bind('keyup', function($event) {
                if($event.keyCode==27){
                    $rootScope.$apply(function () {
                        $rootScope.isFullscreen=false;
                    });
                }
            });
        });
    }])
    .controller('leftSideBarCtrl', function($scope) {
        $scope.$parent.profileSlideToggle=true;

        $scope.menuArray =[
            {"title":"Dashboard","sref":"index","iconCls":"fa-tachometer"},
            {"title":"UI Elements","iconCls":"fa-cogs","parentState":"ui","subMenu":[
                {"title":"Buttons","sref":"ui.buttons"}
            ]}
        ];

        $scope.itemExpended = function(item, $event){
            item.$$isExpend = ! item.$$isExpend;
            $event.stopPropagation();
        };

        $scope.hasSubMenu=function (item) {
            return item.subMenu&&item.subMenu.length>0;
        };
    });