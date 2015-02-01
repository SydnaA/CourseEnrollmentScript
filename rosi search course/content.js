window.setTimeout(function(){tryAddCourse()}, 5000);
function tryAddCourse() {
	document.getElementById("code").value="csc309h1"
	document.getElementById("sectionCode").value="s"
	document.getElementsByClassName("button")[0].click();
}
