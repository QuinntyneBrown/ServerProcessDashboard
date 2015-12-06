angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html",
		"<div id=\"server-process-editor\">"+
		"    "+
		"    <hgroup>"+
		"        <h1 data-ng-show=\"vm.entity.id > 0\">Edit Server Process</h1>"+
		"        <h1 data-ng-hide=\"vm.entity.id\">Create Server Process</h1>"+
		"    </hgroup>"+
		""+
		"    <form name=\"serverProcessEditor\" role=\"form\" data-ng-submit=\"tryToSave(serverProcessEditor)\" novalidate>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Name"+
		"            </label>"+
		"            <input data-ng-model=\"vm.entity.name\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"save\" class=\"btn btn-lrg\" />"+
		"        </p>"+
		"    </form>"+
		""+
		"</div>"
	);
}]);
