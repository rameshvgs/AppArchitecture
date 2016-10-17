angular.module('LoginCtrl', []).controller('LoginController', function ($scope, $http, $location) {

    $scope.sub = function () {
        //$scope.user = {};
        $http({
            method: 'POST',
            url: '/login',
            dataType: "json",
            data: $scope.user
        })
                .success(function (data) {
                    //console.log(data.local.email);
                    if (typeof data.local.email !== 'undefined') {
                        $location.path("/dashboard");
                    } else {

                    }
                });
    }
    
    $scope.appLogout = function () {
        //$scope.user = {};
        $http({
            method: 'POST',
            url: '/logout',
            dataType: "json",
            data: $scope.user
        })
                .success(function (data) {
                    $location.path("/login");
                });
    }
    $scope.appFBlogin = function () {
       $location.path("auth/facebook");
    }

});