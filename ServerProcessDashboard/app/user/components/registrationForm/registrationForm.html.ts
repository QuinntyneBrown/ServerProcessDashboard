angular.module("user").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/user/components/registrationForm/registrationForm.html",
		"<div>"+
		""+
		"    <hgroup>"+
		"        <h1>Register</h1>"+
		"    </hgroup>"+
		""+
		"    <form role=\"form\" data-ng-submit=\"submit()\" novalidate>"+
		""+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                First Name"+
		"            </label>"+
		"            <input data-ng-model=\"model.firstname\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Last Name"+
		"            </label>"+
		"            <input data-ng-model=\"model.lastname\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Email"+
		"            </label>"+
		"            <input data-ng-model=\"model.emailaddress\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Password"+
		"            </label>"+
		"            <input data-ng-model=\"model.password\" type=\"password\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Confirm Password"+
		"            </label>"+
		"            <input data-ng-model=\"model.confirmpassword\" type=\"password\" class=\"form-control\" />"+
		"        </div>"+
		""+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"register\" class=\"btn btn-lrg\" />"+
		"        </p>"+
		"    </form>"+
		"</div>"
	);
}]);
