angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/templates/runningserverprocess.html",
		"<div>"+
		"    <running-server-process></running-server-process>"+
		"</div>"
	);
}]);
