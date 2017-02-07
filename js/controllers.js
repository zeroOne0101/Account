/**
 * Created by 徐威斌 on 2017/1/29.
 */
angular.module('zy.controllers', [])
    //主页
    .controller('HomeCtrl', function ($http, $scope, $ionicSlideBoxDelegate, DataFact) {
        $scope.SE = {
            //获取主页产品列表
            getIndexProductList: function () {
                DataFact.url("/API/getDetailList.ashx", "1").then(
                    function (data) {
                        $scope.productList = data;
                    });
            }

        };

        $scope.SE.getIndexProductList();
    })

    //钱包
    .controller('AboutTabCtrl', function ($http, $scope, $ionicSlideBoxDelegate, DataFact) {
        $scope.SE = {
            //获取主页产品列表
            getIndexProductList: function () {
                DataFact.url("/API/getIndexNewsList.ashx", "1").then(
                    function (data) {
                        $scope.productList = data;
                    });
            }

        };
        $scope.SE.getIndexProductList();
    })

    .controller('HomeTabCtrl', function ($http, $scope, $ionicSlideBoxDelegate, DataFact) {
        $scope.SE = {
            //获取主页产品列表
            getIndexProductList: function () {
                DataFact.url("/API/getDetailList.ashx", "1").then(
                    function (data) {
                        $scope.productList = data;
                    });
            }

        };
        $scope.SE.getIndexProductList();
    });




