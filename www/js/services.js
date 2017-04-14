angular.module('starter.services', [])
  .factory('Lists',function (){
    var lists=[];
    return {
      all: function(its) {
        lists=its;
        return lists;
      },
      get: function(listId) {
        for (var i = 0; i < lists.length; i++) {
          if (lists[i].id === listId) {
            return lists[i];
          }
        }
        return null;
      }
    };
  })


