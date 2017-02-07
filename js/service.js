/**
 * Created by upupPc8 on 2016/1/21.
 */
angular.module('zy.services', [])
.factory('DataFact', function ($q, $http) {
  return {
    url: function (url, strWhere) {
      var deferred = $q.defer();//�����Ӻ�ִ�У���ʾҪȥ��غ����ִ��
      $http({
        method: "POST",
        url: url,
        data: { "strWhere": strWhere }
      }).
      success(function (data, status, header, config) {
        deferred.resolve(data);  // ����ִ�гɹ�����http�������ݳɹ������Է���������
      }).
      error(function (data, status, headers, config) {
        deferred.reject(data);       //����ִ��ʧ�ܣ�����������������
      });
      return deferred.promise;      //���س�ŵ�����ﲢ�����������ݣ����Ƿ����������ݵ�API
    }
  }
})