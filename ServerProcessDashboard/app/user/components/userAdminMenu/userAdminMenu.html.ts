angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/components/userAdminMenu/userAdminMenu.html",
		"<div data-ng-if=\"isUserInRole('System')\">"+
		""+
		"    <ul class=\"nav-text\">"+
		""+
		"        <li class=\"divider\">USERS</li>"+
		""+
		"        <li><a href=\"#/admin/user/create\">Create User</a></li>"+
		""+
		"        <li><a href=\"#/admin/users\">Users</a></li>"+
		""+
		"    </ul>"+
		""+
		"</div>"
	);
}]);
