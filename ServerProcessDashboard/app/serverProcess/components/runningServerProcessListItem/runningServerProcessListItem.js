var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcessListItem = (function () {
        function RunningServerProcessListItem(serverProcessUow) {
            this.serverProcessUow = serverProcessUow;
            this.$inject = ["serverProcessUow"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {
                entity: "="
            };
            this.templateUrl = "/app/serverProcess/components/runningServerProcessListItem/runningServerProcessListItem.html";
            this.link = function (scope, element, attributes) {
                scope.$on("runningServerProcessUpdate", function (event, object) {
                    if (object.guid == scope.entity.guid) {
                        scope.entity.executionState = object.executionState;
                        scope.$digest();
                    }
                });
            };
        }
        RunningServerProcessListItem.componentId = "runningServerProcessListItem";
        return RunningServerProcessListItem;
    })();
    angular.module("serverProcess").directive(RunningServerProcessListItem.componentId, function (serverProcessUow) { return new RunningServerProcessListItem(serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcessListItem.js.map