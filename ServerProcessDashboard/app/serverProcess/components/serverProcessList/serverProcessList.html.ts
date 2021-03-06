angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/serverProcessList/serverProcessList.html",
		"<div>"+
		""+
		"    <hgroup>"+
		"        <h1>Server Processes</h1>"+
		"    </hgroup>"+
		""+
		"    <a href=\"#/serverProcess/add\">Add</a>"+
		""+
		"    <table>"+
		"        <thead>"+
		"            <tr>"+
		"                <th>Id</th>"+
		"                <th>Name</th>"+
		"                <th>Actions</th>"+
		"            </tr>"+
		"        </thead>"+
		"        <tbody>"+
		"            <tr data-ng-repeat=\"entity in vm.entities\">"+
		"                <td><a>{{ entity.id }}</a></td>"+
		"                <td><a>{{ entity.name }}</a></td>"+
		"                <td>"+
		"                    <a data-ng-click=\"vm.run(entity)\">run</a>&nbsp;|&nbsp;                    "+
		"                    <a href=\"#/serverprocess/edit/{{ entity.id }}\">edit</a>&nbsp;|&nbsp;"+
		"                    <a data-ng-click=\"vm.remove(entity)\">delete</a>"+
		"                </td>"+
		"            </tr>"+
		"        </tbody>"+
		"    </table>"+
		"</div>"
	);
}]);
