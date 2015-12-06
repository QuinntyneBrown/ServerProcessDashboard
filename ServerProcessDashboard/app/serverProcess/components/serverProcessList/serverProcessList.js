var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessList = (function () {
        function ServerProcessList($location, serverProcessService) {
            var _this = this;
            this.$location = $location;
            this.serverProcessService = serverProcessService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/serverProcess/components/serverProcessList/serverProcessList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.serverProcessService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                scope.vm.run = function (entity) {
                    return _this.serverProcessService.run({
                        stepName: "stepName",
                        serverProcessName: entity.name
                    }).then(function (result) {
                        //this.$location.path("/runningserverprocess/" + result.guid);
                    }).catch(function (error) {
                    });
                };
                return _this.serverProcessService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["$location", "serverProcessService"];
        }
        ServerProcessList.componentId = "serverProcessList";
        return ServerProcessList;
    })();
    angular.module("serverProcess").directive(ServerProcessList.componentId, function ($location, serverProcessService) { return new ServerProcessList($location, serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessList.js.map