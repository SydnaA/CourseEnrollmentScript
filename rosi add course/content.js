window.setTimeout(function(){tryAddCourse()}, 3000);
function tryAddCourse() {
	if(document.getElementsByClassName("button").length!=0) {
		document.getElementsByClassName("button")[0].click();
	} else {
		window.open("https://sws.rosi.utoronto.ca/sws/reg/course/edit.do?editCourse.dispatch", "_self");
	}
}
