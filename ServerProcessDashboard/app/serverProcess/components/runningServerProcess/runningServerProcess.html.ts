angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/runningServerProcess/runningServerProcess.html",
		"<div>"+
		"    {{ entity }}"+
		"</div>"
	);
}]);
