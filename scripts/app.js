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
        'FBAngular',
        'chart.js',
        "ngRadialGauge"
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
            })
            .state('ui.sliders-progress', {
                url: "/sliders-progress",
                templateUrl: "views/ui-sliders-progress.html",
                data: {
                    pageTitle: 'Sliders and Progress'
                }
            })
            .state('ui.modals-popups', {
                url: "/modals-popups",
                templateUrl: "views/ui-modals-popups.html",
                data: {
                    pageTitle: 'Modals and Popups'
                }
            })
            .state('ui.tabs-accordions', {
                url: "/tabs-accordions",
                templateUrl: "views/ui-tabs-accordions.html",
                data: {
                    pageTitle: 'Tabs and Accordions'
                }
            })
            .state('ui.alerts-notifications', {
                url: "/alerts-notifications",
                templateUrl: "views/ui-alerts-notifications.html",
                data: {
                    pageTitle: 'Alerts and Notifications'
                }
            })
            .state('ui.nestable-lists', {
                url: "/nestable-lists",
                templateUrl: "views/ui-nestable-lists.html",
                data: {
                    pageTitle: 'Nestable and Lists'
                }
            })
            .state('ui.panels', {
                url: "/panels",
                templateUrl: "views/ui-panels.html",
                data: {
                    pageTitle: 'Panels'
                }
            })
            .state('ui.icons', {
                url: "/icons",
                templateUrl: "views/ui-icons.html",
                data: {
                    pageTitle: 'Icons'
                }
            })
            .state('ui.typography', {
                url: "/typography",
                templateUrl: "views/ui-typography.html",
                data: {
                    pageTitle: 'Typography'
                }
            })
            .state('forms', {
                abstract: true,
                url: "/forms",
                templateUrl: "views/common.html",
            })
            .state('forms.components', {
                url: "/components",
                templateUrl: "views/forms-components.html",
                data: {
                    pageTitle: 'Components'
                }
            })
            .state('forms.validation', {
                url: "/validation",
                templateUrl: "views/forms-validation.html",
                data: {
                    pageTitle: 'Validation'
                }
            })
            .state('forms.mask', {
                url: "/mask",
                templateUrl: "views/forms-mask.html",
                data: {
                    pageTitle: 'Mask'
                }
            })
            .state('forms.wizard', {
                url: "/wizard",
                templateUrl: "views/forms-wizard.html",
                data: {
                    pageTitle: 'Wizard'
                }
            })
            .state('forms.wizard.step_one', {
                url: "/step_one",
                templateUrl: "views/wizard/step_one.html",
                data: {
                    pageTitle: 'Wizard'
                }
            })
            .state('forms.wizard.step_two', {
                url: "/step_two",
                templateUrl: "views/wizard/step_two.html",
                data: {
                    pageTitle: 'Wizard'
                }
            })
            .state('forms.wizard.step_three', {
                url: "/step_three",
                templateUrl: "views/wizard/step_three.html",
                data: {
                    pageTitle: 'Wizard'
                }
            })
            .state('forms.multi-upload', {
                url: "/multi-upload",
                templateUrl: "views/forms-multi-upload.html",
                data: {
                    pageTitle: 'Multiple File Upload'
                }
            })
            .state('forms.wysiwyg', {
                url: "/wysiwyg",
                templateUrl: "views/forms-wysiwyg.html",
                data: {
                    pageTitle: 'WYSIWYG Editors'
                }
            })
            .state('tables', {
                abstract: true,
                url: "/tables",
                templateUrl: "views/common.html",
            })
            .state('tables.basic', {
                url: "/basic",
                templateUrl: "views/tables-basic.html",
                data: {
                    pageTitle: 'Basic Table'
                }
            })
            .state('tables.data', {
                url: "/data",
                templateUrl: "views/tables-data.html",
                data: {
                    pageTitle: 'Data Tables'
                }
            })
            .state('charts', {
                abstract: true,
                url: "/charts",
                templateUrl: "views/common.html",
            })
            .state('charts.chartjs', {
                url: "/chartjs",
                templateUrl: "views/charts-chartjs.html",
                data: {
                    pageTitle: 'Chart.js'
                }
            })
            .state('charts.c3', {
                url: "/c3",
                templateUrl: "views/charts-c3.html",
                data: {
                    pageTitle: 'C3 Charts'
                }
            })
            .state('charts.morris', {
                url: "/morris",
                templateUrl: "views/charts-morris.html",
                data: {
                    pageTitle: 'Morris.js Charts'
                }
            })
            .state('charts.sparkline', {
                url: "/sparkline",
                templateUrl: "views/charts-sparkline.html",
                data: {
                    pageTitle: 'Sparkline Charts'
                }
            })
            .state('mail', {
                abstract: true,
                url: "/mail",
                templateUrl: "views/common.html",
            })
            .state('mail.inbox', {
                url: "/inbox",
                templateUrl: "views/mail-inbox.html",
                data: {
                    pageTitle: 'Mail Inbox'
                }
            })
            .state('mail.compose', {
                url: "/compose",
                templateUrl: "views/mail-compose.html",
                data: {
                    pageTitle: 'Compose Mail'
                }
            })
            .state('maps', {
                abstract: true,
                url: "/maps",
                templateUrl: "views/common.html",
            })
            .state('maps.google', {
                url: "/google",
                templateUrl: "views/maps-google.html",
                data: {
                    pageTitle: 'Google Maps'
                }
            })
            .state('maps.vector', {
                url: "/vector",
                templateUrl: "views/maps-vector.html",
                data: {
                    pageTitle: 'Vector Maps'
                }
            })
            .state('pages', {
                abstract: true,
                url: "/pages",
                templateUrl: "views/common.html",
            })
            .state('pages.blank', {
                url: "/blank",
                templateUrl: "views/pages-blank.html",
                data: {
                    pageTitle: 'Blank Page'
                }
            })
            .state('pages.profile', {
                url: "/profile",
                templateUrl: "views/pages-profile.html",
                data: {
                    pageTitle: 'Profile'
                }
            })
            .state('animations', {
                url: "/animations",
                templateUrl: "views/animations.html",
                data: {
                    pageTitle: 'Animations'
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
    })
    .controller('chartJsDoughnutCtrl',function ($scope) {
        $scope.labels = ["Chrome", "IE", "Safari","Other","Firefox"];
        $scope.data = [300, 50, 100,40,120];
    })
    .controller('gaugeCtrl',function ($scope) {
        $scope.value = 1.5;
        $scope.upperLimit = 6;
        $scope.lowerLimit = 0;
        $scope.unit = "kW";
        $scope.precision = 2;
        $scope.ranges = [
            {
                min: 0,
                max: 1.5,
                color: '#DEDEDE'
            },
            {
                min: 1.5,
                max: 2.5,
                color: '#8DCA2F'
            },
            {
                min: 2.5,
                max: 3.5,
                color: '#FDC702'
            },
            {
                min: 3.5,
                max: 4.5,
                color: '#FF7700'
            },
            {
                min: 4.5,
                max: 6.0,
                color: '#C50200'
            }
        ];
    })
    .controller('chartJsLineCtrl',function ($scope) {
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    })
    .controller('chartJsBarCtrl',function ($scope) {
        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    })
    .controller('calCtrl',function ($scope) {

    });