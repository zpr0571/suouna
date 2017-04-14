
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');  
        $ionicConfigProvider.platform.ios.tabs.position('bottom');  
        $ionicConfigProvider.platform.android.tabs.style('standard');  
        $ionicConfigProvider.platform.android.tabs.position('standard');  
  
        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');  
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');  
  
        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');  
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');  
  
        $ionicConfigProvider.platform.ios.views.transition('ios');  
        $ionicConfigProvider.platform.android.views.transition('android'); 
 
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.zuopin', {
      url: '/zuopin',
      views: {
        'tab-zuopin': {
          templateUrl: 'templates/tab-zuopin.html',
          controller: 'ZuopinCtrl'
        }
      }
   })
  .state('tab.zuopin_detail', {
      url: '/zuopin_detail/:id/:title',
      views: {
        'tab-zuopin': {
          templateUrl: 'templates/writing/zuopin_detail.html',
          controller: 'ZuopinDetailCtrl'
        }
      }
   })
  .state('tab.kepian', {
    url: '/kepian',
    views: {
      'tab-kepian': {
        templateUrl: 'templates/tab-kepian.html',
        controller: 'KepianCtrl'
      }
    }
  })
  .state('tab.kepian-video', {
    url: '/kepian/video/:id',
    views: {
      'tab-kepian': {
        templateUrl: 'templates/video/video.html',
        controller: 'VideoCtrl'
      }
    }
  })
  .state('tab.clothes', {
      url: '/clothes',
      views: {
        'tab-clothes': {
          templateUrl: 'templates/tab-clothes.html',
          controller: 'ClothesCtrl'
        }
      }
   })
   .state('tab.clothes-detail', {
      url: '/clothes-detail/:id/:title',
      views: {
        'tab-clothes': {
          templateUrl: 'templates/clothes-detail.html',
          controller: 'CdCtrl'
        }
      }
   })
  .state('tab.myself', {
      url: '/myself',
      views: {
        'tab-myself': {
          templateUrl: 'templates/tab-myself.html',
          controller: 'MyselfCtrl'
        }
      }
   })
  .state('tab.login', {
      url: '/login',
      views: {
        'tab-myself': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
          
        }
      } 
   })
  .state('tab.detail', {
      url: '/detail',
      views: {
        'tab-myself': {
          templateUrl: 'templates/detail.html',
          controller: 'DetailCtrl'   
        }
      } 
   })
  .state('tab.enroll', {
      url: '/enroll',
      views: {
        'tab-myself': {
          templateUrl: 'templates/myself/enroll.html',
          controller: 'EnrollCtrl'
          
        }
      }
   })
  .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-myself': {
          templateUrl: 'templates/myself/favorites.html',
          controller: 'FavoritesCtrl'
          
        }
      } 
   });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
