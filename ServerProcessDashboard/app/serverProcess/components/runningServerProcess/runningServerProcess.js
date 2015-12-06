var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcess = (function () {
        function RunningServerProcess($rootScope, $routeParams, serverProcessUow) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$routeParams = $routeParams;
            this.serverProcessUow = serverProcessUow;
            this.$inject = ["$rootScope", "$routeParams", "serverProcessUow"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/serverProcess/components/runningServerProcess/runningServerProcess.html";
            this.link = function (scope, element, attributes) {
                var guid = _this.$routeParams.runningserverprocessguid;
                scope.$on("runningServerProcessUpdate", function (event, object) {
                    if (object == scope.entity.guid) {
                        scope.entity.executionState = 1;
                        scope.$digest();
                    }
                });
                scope.$on("runningServerProcessComplete", function (event, object) {
                    if (object == scope.entity.guid) {
                        scope.entity.executionState = 2;
                        scope.$digest();
                    }
                });
                if (guid) {
                    return _this.serverProcessUow.runningServerProcesses.getByGuid(guid).then(function (results) {
                        scope.entity = results;
                    }).catch(function (error) {
                    });
                }
            };
        }
        RunningServerProcess.componentId = "runningServerProcess";
        return RunningServerProcess;
    })();
    angular.module("serverProcess").directive(RunningServerProcess.componentId, function ($rootScope, $routeParams, serverProcessUow) { return new RunningServerProcess($rootScope, $routeParams, serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcess.js.map