var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcessList = (function () {
        function RunningServerProcessList($routeParams, serverProcessUow) {
            var _this = this;
            this.$routeParams = $routeParams;
            this.serverProcessUow = serverProcessUow;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html";
            this.link = function (scope, element, attributes) {
                scope.$on("runningServerProcessUpdate", function (event, object) {
                    if (object.executionState == 0) {
                        scope.entities.push(object);
                        scope.$digest();
                    }
                });
                if (_this.$routeParams.serverprocessid) {
                    _this.serverProcessUow.runningServerProcess.getAllByServerProcessId({ id: _this.$routeParams.serverprocessid }).then(function (results) {
                        scope.entities = results;
                    }).catch(function (error) {
                    });
                }
                else {
                    _this.serverProcessUow.runningServerProcesses.getAll().then(function (results) {
                        scope.entities = results;
                    }).catch(function (error) {
                    });
                }
            };
            this.$inject = ["$routeParams", "serverProcessUow"];
        }
        RunningServerProcessList.componentId = "runningServerProcessList";
        return RunningServerProcessList;
    })();
    angular.module("serverProcess").directive(RunningServerProcessList.componentId, function ($routeParams, serverProcessUow) { return new RunningServerProcessList($routeParams, serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcessList.js.map