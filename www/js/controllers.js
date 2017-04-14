angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope){
      // $('.carousel').carousel();
      $scope.lunbo1=function(){
        $('.img_third>a:nth-child(1)>img').show();
        $('.img_third>a:nth-child(2)>img').hide();
        $('.img_third>a:nth-child(3)>img').hide();
        $('.mj').addClass('wcc');
        $('.fq').removeClass('wcc');
        $('.sun').removeClass('wcc');
      }
       $scope.lunbo2=function(){
        $('.img_third>a:nth-child(2)>img').show();
        $('.img_third>a:nth-child(1)>img').hide();
        $('.img_third>a:nth-child(3)>img').hide();
        $('.mj').removeClass('wcc');
        $('.fq').addClass('wcc');
        $('.sun').removeClass('wcc');
      }
       $scope.lunbo3=function(){
        $('.img_third>a:nth-child(3)>img').show();
        $('.img_third>a:nth-child(2)>img').hide();
        $('.img_third>a:nth-child(1)>img').hide();
        $('.mj').removeClass('wcc');
        $('.fq').removeClass('wcc');
        $('.sun').addClass('wcc');
      }
})
.controller('ZuopinCtrl', function($http,$scope,Lists) {
  // $('.carousel').carousel();
  $.getJSON('php/test.php',{a: '查'},function(data){
    $scope.lists = Lists.all(data);
    console.log(data);
  })
})
.controller('ZuopinDetailCtrl', function($scope,$stateParams,Lists) {
  // $('.carousel').carousel();
   console.log($stateParams);
   $scope.title = $stateParams.title;
   $.getJSON('php/test.php',{a: '详情',id: $stateParams.id},function(data){
    $scope.lists = Lists.all(data);
    console.log(data);
  })
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('KepianCtrl', function($scope,Lists) {
  // $('.carousel').carousel();
  $.getJSON('php/test.php',{a: '视频'},function(data){
    $scope.lists = Lists.all(data);
    // console.log(data);
  })
})
.controller('VideoCtrl', function($scope,$stateParams,Lists) {
  $.getJSON('php/test.php',{a: '详情',id:$stateParams.id},function(data){
    $scope.lists = Lists.all(data);
    console.log(data);
  })
})

.controller('ClothesCtrl', function($scope) {
  // $('.carousel').carousel();
  $scope.isA = function(){
     $('.wd').show();
     $('.fd').hide();
     $('.hs').addClass('wcc');
     $('.lf').removeClass('wcc');
  }
  $scope.isB = function(){
    $('.fd').show();
    $('.wd').hide();
    $('.lf').addClass('wcc');
    $('.hs').removeClass('wcc');
  }
  $.getJSON('php/test.php',{a: '婚纱'},function(data) {
    $scope.lists = data;
    console.log($scope.lists);
  })
  $.getJSON('php/test.php',{a: '礼服'},function(data) {
    $scope.list = data;
    console.log($scope.list);
  })
  $scope.clothes_collection = function($event,id){
    $scope.uname=uname;
    console.log($scope.uname);
    if(id&&uname){
      if($($event.target).children().hasClass('ion-android-favorite-outline')){
        $($event.target).children().removeClass('ion-android-favorite-outline');
        $($event.target).children().addClass('ion-android-favorite');
        $.get('php/test.php',{a: '收藏',cid: id},function(data){
        })
      }else{
        $($event.target).children().removeClass('ion-android-favorite');
        $($event.target).children().addClass('ion-android-favorite-outline');
        $.get('php/test.php',{a: '取消收藏',cid: id},function(data){
        })
      } 
    }else{
      alert('请前往登录！');
    } 
  } 
})
.controller('CdCtrl', function($scope,$stateParams,Lists) {
  // $('.carousel').carousel();
   $scope.title = $stateParams.title;
   console.log($scope.title);
   $.getJSON('php/test.php',{a: '详情',id: $stateParams.id},function(data){
    console.log($stateParams.id);
    $scope.imgs = Lists.all(data);
    console.log($scope.imgs);
  })
})
.controller('MyselfCtrl', function($scope) {
  $scope.uname=uname;
  $scope.favorite = function() {
    if (uname) {
      window.location.href='#/tab/favorites';
    }else{
      alert('请登录！');
      window.location.href='#/tab/login';
    }
  }
})
.controller('LoginCtrl', function($scope) {
  
})
.controller('EnrollCtrl', function($scope) {
   
})
.controller('DetailCtrl', function($scope) {})
.controller('FavoritesCtrl', function($scope,Lists) {
  $.getJSON('php/test.php',{a: '收藏查询'},function(data){
    $scope.favorite = Lists.all(data);
    console.log($scope.favorite);
  })
});
