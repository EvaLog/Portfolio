var app = angular.module("Contact", []); 
app.controller("contact", function($rootScope,$scope) {
    $scope.products = ["예제 ", "테스트", "test"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "이미 등록하셧습니다.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});