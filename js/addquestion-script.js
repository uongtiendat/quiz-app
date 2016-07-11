// JavaScript Document

/*document.addEventListener('DOMContentLoaded', function() {
	for ( var i = 0; i < 4; i++) {
		var opt = document.createElement('div');
		opt.id = 'option';
		document.getElementById("answer").appendChild(opt);
	}
});*/

var app = angular.module("quizApp", []);
app.controller("contentLoader", function($scope, $http) {
	$scope.inputs = ['<input type="text" placeholder="Answer . . ." />',
					'<input type="text" placeholder="Answer . . ." />',
					'<input type="text" placeholder="Answer . . ." />',
					'<input type="text" placeholder="Correct Answer . . ." />'];
});