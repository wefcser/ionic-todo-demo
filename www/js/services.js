/**
 * Created by wangyifei on 2017/4/17.
 */
angular.module('starter.services')
  .factory('Tasks', function() {
    return {
      all: function() {
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          return angular.fromJson(taskString);
        }
        return [];
      },
      save: function(task) {
        var tasks = [];
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          tasks = angular.fromJson(taskString);
        }
        var insert=false;
        for(i=0;i<tasks.length;i++){
          if(tasks[i].check==true){
            tasks.splice(i,0,task);
            insert=true;
            break;
          }
        }
        if(!insert)tasks.push(task);
        window.localStorage['tasks'] = angular.toJson(tasks);
      },
      complete: function(task) {
        var tasks = [];
        var taskString = window.localStorage['tasks'];
        if(taskString) {
          tasks = angular.fromJson(taskString);
        }
        //更新匹配的第一个并移到末尾
        for (i = 0; i < tasks.length; i++) {
          if(tasks[i].check)break;
          if (tasks[i].title == task.title) {
            tasks[i].check = true;
            var temp=tasks[i];
            tasks.splice(i,1);
            tasks.push(temp)
            break;
          }
        }
        window.localStorage['tasks'] = angular.toJson(tasks);
      }
    }
  })
