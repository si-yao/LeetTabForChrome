var random_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'https%3A%2F%2Fleetcode.com'%20and%20xpath%3D%22%2F%2Fli%5B3%5D%5B%40id%3D'pickNav'%5D%2Fa%22&format=json&diagnostics=true&callback="
var base_url = "https://leetcode.com";

function getLC() {
	$.get(random_url, function(data) {
		var question_url = base_url + data.query.results.a.href;
		$( "#problem" ).load(question_url+ " .question-title h3", function(){
			$( "#content" ).load(question_url+ " .question-content", function(){
				var tag = document.getElementById('tags');
				if (tag != null) {
					tag.innerHTML = "\n\nSiyao";
				}
				var similar = document.getElementById('similar');
				if (similar != null) {
					similar.innerHTML = "";
				}
			});
		});
	});
}

window.onload = function () {
	getLC();
}