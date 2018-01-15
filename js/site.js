//앵귤라 모듈 만들기
var app = angular.module("Site", ["ngRoute","Contact"]);	//Home은 home.js의 모듈명

// 라우터 처리 부분 (싱글 페이지 적용)
app.config(function($routeProvider){
	$routeProvider.when("/home", {
		templateUrl : "html/index.html"
	}).when("/about", {
		templateUrl : "html/about.html"
	}).when("/gallery", {
		templateUrl : "html/gallery.html"
	}).when("/contact", {
		templateUrl : "html/contact.html",
		controller : "contact"
	}).otherwise({redirectTo: "/home"});
});

app.run(function($rootScope,$http){
	$rootScope.nav = 'html/nav.html';
	$rootScope.footer = 'html/footer.html';
	$rootScope.navEvent = function(){
		$rootScope.navDis = location.hash;	//nav.html
	};
	}); 

app.controller("public", function($rootScope, $scope){
	$rootScope.navEvent();
}); 