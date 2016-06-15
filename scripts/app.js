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
    .run(['$rootScope','Fullscreen',function ($rootScope,Fullscreen) {
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

        $rootScope.toggleFullScreen = function() {
            Fullscreen.toggleAll();
        }
    }])
    .controller('leftSideBarCtrl', function($scope) {
        $scope.$parent.profileSlideToggle=true;

        $scope.menuArray =[
            {"title":"Dashboard","sref":"index","iconCls":"fa-tachometer"},
            {"title":"UI Elements","iconCls":"fa-cogs","parentState":"ui","subMenu":[
                {"title":"Buttons","sref":"ui.buttons"},
                {"title":"Sliders & Progress","sref":"ui.sliders-progress"},
                {"title":"Modals & Popups","sref":"ui.modals-popups"},
                {"title":"Tabs & Accordions","sref":"ui.tabs-accordions"},
                {"title":"Alerts & Notifications","sref":"ui.alerts-notifications"},
                {"title":"Nestable & Lists","sref":"ui.nestable-lists"},
                {"title":"Panels","sref":"ui.panels"},
                {"title":"Icons","sref":"ui.icons"},
                {"title":"Typography","sref":"ui.typography"}
            ]},
            {"title":"Forms","iconCls":"fa-edit","parentState":"forms","subMenu":[
                {"title":"Components","sref":"forms.components"},
                {"title":"Validation","sref":"forms.validation"},
                {"title":"Mask","sref":"forms.mask"},
                {"title":"Wizard","sref":"forms.wizard.step_one"},
                {"title":"Multiple File Upload","sref":"forms.multi-upload"},
                {"title":"WYSIWYG Editors","sref":"forms.wysiwyg"}
            ]},
            {"title":"Tables","iconCls":"fa-th-list","parentState":"tables","subMenu":[
                {"title":"Basic","sref":"tables.basic"},
                {"title":"Data Tables","sref":"tables.data"}
            ]},
            {"title":"Charts","iconCls":"fa-bar-chart-o","parentState":"charts","subMenu":[
                {"title":"Chart.js","sref":"charts.chartjs"},
                {"title":"C3 Charts","sref":"charts.c3"},
                {"title":"Morris.js Charts","sref":"charts.morris"},
                {"title":"Sparkline Charts","sref":"charts.sparkline"}
            ]},
            {"title":"Mail","iconCls":"fa-envelope-o","parentState":"mail","subMenu":[
                {"title":"Mail Inbox","sref":"mail.inbox"},
                {"title":"Mail Compose","sref":"mail.compose"}
            ]},
            {"title":"Pages","iconCls":"fa-file-text","parentState":"pages","subMenu":[
                {"title":"Blank Page","sref":"pages.blank"},
                {"title":"Profile","sref":"pages.profile"},
                {"title":"Sign In","sref":"pages.blank"},
                {"title":"Sign Up","sref":"pages.profile"},
                {"title":"Locked Screen","sref":"pages.blank"},
                {"title":"404 Page","sref":"pages.profile"},
                {"title":"500 Page","sref":"pages.profile"}
            ]},
            {"title":"Animations","sref":"animations","iconCls":"fa-magic"}
        ];

        $scope.curMenu=$scope.menuArray[0];

        $scope.itemExpended = function(item, $event){
            if($scope.curMenu.title!=item.title){
                $scope.curMenu.$$isExpend = false;
            }
            item.$$isExpend = !item.$$isExpend;
            $scope.curMenu=item;
            $event.stopPropagation();
        };

        $scope.hasSubMenu=function (item) {
            return item.subMenu&&item.subMenu.length>0;
        };
    });