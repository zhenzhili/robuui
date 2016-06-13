/**
 * Created by lizhenzhi on 2016/5/28.
 */
angular
    .module('rbAdminAapp', [
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'uiSwitch'
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
    }])
    .controller('leftSideBarCtrl', function($scope) {
        $scope.menuArray =[
            {"title":"Dashboard","sref":"index","iconCls":"fa-tachometer"},
            {"title":"UI Elements","iconCls":"fa-cogs","parentState":"ui","subMenu":[
                {"title":"Buttons","sref":"ui.buttons"}
            ]}
        ];

        $scope.isMenuItem=function (item) {
            return item.subMenu&&item.subMenu.length>0;
        };
    });