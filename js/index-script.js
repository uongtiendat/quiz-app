// JavaScript Document
var stopFlag = 1;
document.addEventListener('DOMContentLoaded', function() {
	var slide = document.getElementById("overlay-slidein");
	var menu = document.getElementById("menu-wrapper");
	menu.addEventListener("click", function() {
		if(menu.className == ""){
			menu.className = "open";
			slide.className = "open";
		}
		else {
			menu.className = "";	
			slide.className = "";
		}
	});
	
	var welcomeScreen = document.getElementById("overlay-wrapper");
	var circle = document.getElementById("half-circle");
	welcomeScreen.addEventListener("click", function() {
		stopFlag = 0;
		welcomeScreen.className = "close";
		circle.className = "spin";
	});
});

var app = angular.module("quizApp", []);
app.controller("contentLoader", function($scope, $http, $interval, $timeout) {
	
	$scope.getQuestion = function() {
		$http.get("data/questionloader.php").then(function (respone) {
			$scope.quest = respone.data;
		});
	}
	
	$scope.getAnswer = function(id) {
		$http.get("data/answerloader.php?id=" + id).then(function (respone) {
			$scope.option = respone.data;
		});
	};
	
	$scope.setSelected = function(selected) {
		$scope.selected = selected;
	};
	
	$scope.checkAnswer = function(id, answer, index) {
		$http.get("data/checkanswer.php?id=" + id + "&answer=" + answer).then(function (respone) {
			var result = respone.data;
			var overlay = document.getElementById("overlay-gameover");
			var option = document.getElementById("option");
			if(result == "true") {
				$scope.result = "⇨";
				overlay.className = "next";
				//option.style.backgroundColor = "#BEEE3B";
				//option.style.color = "#FFF";
			}
			else {
				overlay.className = "over";
				//option.style.backgroundColor = "#EE47FC";
				//option.style.color = "#FFF";
			}
			stopFlag = 1;
			document.getElementById("half-circle").className = "";
			$scope.setSelected(index);
			//$scope.selected.value = $index;
			//console.log($index);
		});
	};
	
	$scope.timecount = 10;
	$interval( function() {
		if($scope.timecount > 0 && stopFlag == 0) {
			$scope.timecount--;
		}
		if($scope.timecount <= 0) {
			stopFlag = 1;
			document.getElementById("half-circle").className = "";
			document.getElementById("overlay-gameover").className = "over";	
		}
	}, 1000);
	
	$scope.restart = function() {
		$scope.timecount = 10;
		document.getElementById("half-circle").className = "spin";
		document.getElementById("overlay-gameover").className = "";
		document.getElementById("option").className = "";
		stopFlag = 0;
		$scope.getQuestion();
		$scope.result = "";
		$scope.setSelected(-1);
	};
});
