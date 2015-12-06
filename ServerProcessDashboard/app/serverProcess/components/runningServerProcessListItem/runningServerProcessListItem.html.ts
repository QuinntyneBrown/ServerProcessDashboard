angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/runningServerProcessListItem/runningServerProcessListItem.html",
		"<div>"+
		"    "+
		"    <div class=\"running-server-process-list-item started\" data-ng-if=\"entity.executionState=='0'\">"+
		"        <hgroup>"+
		"            <h1>{{ entity.serverProcessDto.name }}</h1>"+
		"            <h5>{{ entity.guid }}</h5>"+
		"        </hgroup>"+
		""+
		"        <a>Started</a>"+
		"        <a href=\"/#\">Kill</a>"+
		"    </div>"+
		"    "+
		"    <div class=\"running-server-process-list-item in-progress\" data-ng-if=\"entity.executionState=='1'\">"+
		"        <hgroup>"+
		"            <h1>{{ entity.serverProcessDto.name }}</h1>"+
		"            <h5>{{ entity.guid }}</h5>"+
		"        </hgroup>"+
		""+
		"        <a>In Progress</a>"+
		"        <a href=\"/#\">Kill</a>"+
		"    </div>"+
		"    "+
		"    <div class=\"running-server-process-list-item completed\" data-ng-if=\"entity.executionState=='5'\">"+
		"        <hgroup>"+
		"            <h1>{{ entity.serverProcessDto.name }}</h1>"+
		"            <h5>{{ entity.guid }}</h5>"+
		"        </hgroup>"+
		""+
		"        <a>Completed</a>"+
		"    </div>"+
		"</div>"
	);
}]);
