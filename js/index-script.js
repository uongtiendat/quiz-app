// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
	var menu = document.getElementById("menu-wrapper");
	menu.addEventListener("click", function() {
		if(menu.className == ""){
			menu.className = "open";
		}
		else {
			menu.className = "";	
		}
	});
});

var app = angular.module("quizApp", []);
app.controller("contentLoader", function($scope, $http, $interval) {
	$http.get("data/questionloader.php").then(function (respone) {
		$scope.quest = respone.data;
	});
	
	$scope.getAnswer = function(id) {
		$http.get("data/answerloader.php?id=" + id).then(function (respone) {
			$scope.option = respone.data;
		});
	};
	
	$scope.checkAnswer = function(id, answer) {
		$http.get("data/checkanswer.php?id=" + id + "&answer=" + answer).then(function (respone) {
			$scope.result = respone.data;
		});
	};
	
	$scope.timecount = 10;
	$interval( function() {
		if($scope.timecount > 0) {
			$scope.timecount--;
		}
	}, 1000);
});
