var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessEditor = (function () {
        function ServerProcessEditor($location, serverProcessUow) {
            var _this = this;
            this.$location = $location;
            this.serverProcessUow = serverProcessUow;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html";
            this.link = function (scope, element, attributes) {
                scope.tryToSave = function (form) {
                    _this.serverProcessUow.serverProcesses.add({ entity: scope.vm.entity }).then(function () {
                        _this.$location.path("/serverprocess/list");
                    }).catch(function (error) {
                    });
                };
            };
            this.$inject = ["$location", "serverProcessUow"];
        }
        ServerProcessEditor.componentId = "serverProcessEditor";
        return ServerProcessEditor;
    })();
    angular.module("serverProcess").directive(ServerProcessEditor.componentId, function ($location, serverProcessUow) { return new ServerProcessEditor($location, serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessEditor.js.map