/**
 * Created by upupPc8 on 2016/1/21.
 */
angular.module('zy.services', [])
.factory('DataFact', function ($q, $http) {
  return {
    url: function (url, strWhere) {
      var deferred = $q.defer();//声明延后执行，表示要去监控后面的执行
      $http({
        method: "POST",
        url: url,
        data: { "strWhere": strWhere }
      }).
      success(function (data, status, header, config) {
        deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
      }).
      error(function (data, status, headers, config) {
        deferred.reject(data);       //声明执行失败，即服务器返回数据
      });
      return deferred.promise;      //返回承诺，这里并不是最终数据，而是访问最终数据的API
    }
  }
})