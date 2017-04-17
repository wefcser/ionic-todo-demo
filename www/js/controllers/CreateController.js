/**
 * Created by wangyifei on 2017/4/17.
 */
angular.module('starter.controllers')
  .controller('CreateController', function ($state, $scope, Tasks) {
    $scope.createTask = function(task) {
      //拒绝空任务
      if(task!=null) {
        task.title = task.title.trim();
        if (task.title.length != 0) {
          task.check = false;
          Tasks.save(task);
          $state.go("tasks");
        }
      }
    };
  });
