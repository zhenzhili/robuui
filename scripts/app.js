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
    }]).controller('leftSideBarCtrl', function($scope) {
        $scope.menuArray =[
            {"title":"Dashboard","sref":"index"},
            {"title":"UI Elements","subMenu":[
                {"title":"Buttons","sref":"ui.buttons"}
            ]}
        ];
    });