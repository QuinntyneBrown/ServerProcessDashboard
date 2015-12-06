angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/templates/runningserverprocesslist.html",
		"<div>    "+
		"    <running-server-process-list></running-server-process-list>"+
		"</div>"
	);
}]);
