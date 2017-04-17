/**
 * Created by wangyifei on 2017/4/17.
 */
angular.module('starter.controllers')
  .controller('TasksController', function ($state, $rootScope, $scope, Tasks) {
    $scope.tasks = Tasks.all();

    $scope.completeTask = function(task) {
      //拒绝空任务
      if(task!=null) {
        task.title = task.title.trim();
        if (task.title.length != 0) {
          //完成任务
          Tasks.complete(task);
        }
        $state.reload();
      }
    };
  });

