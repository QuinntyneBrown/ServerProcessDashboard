angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html",
		"<div>"+
		"    "+
		"    <running-server-process-list-item entity=\"rsp\" data-ng-repeat=\"rsp in entities\"></running-server-process-list-item>"+
		""+
		"</div>"
	);
}]);
