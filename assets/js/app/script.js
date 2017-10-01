// script.js

    // create the module and name it puriFreshApp
    var puriFreshApp = angular.module('puriFreshApp', ['ng', 'ngRoute']);

    // configure our routes
    puriFreshApp.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the pesticides page
            .when('/pesticides', {
                templateUrl : 'pages/pesticides.html',
                controller  : 'aboutController'
            })

            // route for the products page
            .when('/products', {
                templateUrl : 'pages/products.html',
                controller  : 'aboutController'
            })

            // route for the about page
            .when('/team', {
                templateUrl : 'pages/team.html',
                controller  : 'aboutController'
            })

            // route for the forum page
            .when('/forum', {
                templateUrl : 'pages/forum.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the news page
            .when('/news', {
                templateUrl : 'pages/news.html',
                controller  : 'aboutController'
            })

            .when('/cn', {
                templateUrl : 'pages/home.html',
                controller  : 'cnController'
            });

        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    });

    puriFreshApp.controller('localeController', function($scope) {
      var vm = this;
      $scope.words = {
        navbar_home: {
          EN: 'Home',
          CN: '首页'
        },
        navbar_pesticide_effects: {
          EN: 'Pesticide effects',
          CN: '农药危害'
        },
        navbar_products: {
          EN: 'Products',
          CN: '产品'
        },
        navbar_team: {
          EN: 'Team',
          CN: '团队'
        },
        navbar_forum: {
          EN: 'Forum',
          CN: '论坛'
        },
        navbar_partner: {
          EN: 'Be a partner',
          CN: '合作加盟'
        },
        navbar_news: {
          EN: 'News',
          CN: '新闻'
        },
        hero_life: {
          EN: 'Life',
          CN: '健康纯净生活'
        },
        hero_scroll_down: {
          EN: 'scroll down',
          CN: '向下滚动'
        },
        pesticides: {
          EN: 'Pesticides',
          CN: '农药'
        },
        pesticides_potential: {
          EN: 'Potential harmful effects of pesticide residues',
          CN: '农药残留的潜在危害'
        },
        pesticides_abnormal: {
          EN: 'Abnormal growth and development',
          CN: '生长发育异常'
        },
        pesticides_potential: {
          EN: 'Kidney and liver damage',
          CN: '肾脏和肝脏损伤'
        },
        pesticides_infection: {
          EN: 'Increased susceptibility to infection',
          CN: '免疫力下降'
        },
        pesticides_cancer: {
          EN: 'Cancer',
          CN: '癌症'
        },
        pros: {
          EN: 'Pros',
          CN: '优点'
        },
        pesticides_yield: {
          EN: 'Improve yield',
          CN: '提高产量'
        },
        cons: {
          EN: 'Cons',
          CN: '缺点'
        },
        pesticides_danger: {
          EN: 'Dangerous for consumers',
          CN: '危害消费者健康'
        },
        product_large: {
          EN: 'Large Machine',
          CN: '大型机'
        },
        product_large_desc: {
          EN: 'Target customers are large processing factories and university and school dinning halls',
          CN: '适用于大型食品加工厂和学校餐厅'
        },
        product_midsize: {
          EN: 'Midsize Machine',
          CN: '中型机'
        },
        product_midsize_desc: {
          EN: 'Target customers are Medium or small processing factories and university and school dinning halls',
          CN: '适用于中小型食品加工厂和学校餐厅'
        },
        product_small_green: {
          EN: 'Small Green Machine',
          CN: '生鲜小型机'
        },
        product_small_green_desc: {
          EN: 'Target customers are restaurants, convenience stores, and cafeterias',
          CN: '适用于餐厅，便利店和自助餐厅'
        },
        product_small_tall: {
          EN: 'Small Tall Machine',
          CN: '立式小型机'
        },
        product_small_tall_desc: {
          EN: 'Target customers are restaurants, convenience stores, cafeterias, and homes',
          CN: '适用于餐厅，便利店，自助餐厅和家庭'
        },
        product_liquid: {
          EN: 'PuriFresh Liquid',
          CN: '清洗液'
        },
        product_liquid_desc: {
          EN: 'Formulations to preserve freshness of fruit and vegetables and remove and protect against pesticides, fungi, and bacteria',
          CN: '用于降解农药残留的液体制剂，去除真菌和细菌，并保持水果和蔬菜的新鲜度'
        },
        purifresh_team: {
          EN: 'The PuriFresh Team',
          CN: 'PuriFresh团队'
        },
        purifresh_mission: {
          EN: 'Our mission is to to eliminate harmful effects of pesticide residues and provide safe, tasty food products for health conscious consumers.',
          CN: '我们的使命是消除农药残留的有害影响，为拥有健康意识的消费者提供安全、美味的食品。'
        },
        contact_welcome: {
          EN: 'Investors, partners, and general contact',
          CN: '投资者／合伙人／信息检索'
        },
        contact: {
          EN: 'Contact',
          CN: '联系我们'
        },
        address: {
          EN: 'Address',
          CN: '地址'
        },
        phone: {
          EN: 'Phone',
          CN: '电话'
        },
        name: {
          EN: 'Name',
          CN: '姓名'
        },
        email: {
          EN: 'Email',
          CN: '电子邮件'
        },
        message: {
          EN: 'Message',
          CN: '留言'
        },
        send_message: {
          EN: 'Send message',
          CN: '提交'
        },
        show_on_map: {
          EN: 'Show on map',
          CN: '显示地图'
        },
        join: {
          EN: 'Join',
          CN: '加入'
        },
        join_newsletter: {
          EN: 'Join our newsletter',
          CN: '订阅我们的新闻和最新活动信息'
        },
        learn_more: {
          EN: 'Learn more',
          CN: '了解更多'
        },
        under_construction: {
          EN: 'Under construction🚧',
          CN: '正在施工🚧'
        }
      };
      $scope.langSelections = ['EN', 'CN'];
      $scope.lang = 'EN';

      $scope.isCN = function() {
        return $scope.lang == 'CN';
      };
      $scope.onLangSelected = function (langSelection) {
          $scope.lang = langSelection;
      };
      $scope.staticText = function(label) {
        try {
          var word = $scope.words[label][$scope.lang];
          return word
        }
        catch (e) {
           return '';
        }
      };

      // function setLang() {
      //   for (var key in $scope.words) {
      //     if ($scope.words.hasOwnProperty(key)) {
      //       vm.st[key] = $scope.words[key][$scope.lang];
      //       console.log(key, $scope.words[key]);
      //     }
      //   }
      // }
      // vm.st = {
      // };
      // setLang();
    });

    // create the controller and inject Angular's $scope
    puriFreshApp.controller('mainController', function($scope) {
      $scope.onLangSelected('EN');
    });

    // create the controller and inject Angular's $scope
    puriFreshApp.controller('cnController', ['$scope', function($scope) {
      $scope.onLangSelected('CN');
    }]);

    puriFreshApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    puriFreshApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
