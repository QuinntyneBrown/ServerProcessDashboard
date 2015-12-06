var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    angular.module("serverProcess").service("serverProcessSignalRService", function ($rootScope, $) { return new ServerProcessSignalRService($rootScope, $); });
    var ServerProcessSignalRService = (function () {
        function ServerProcessSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.broadcast = function (name, object) {
                _this.$rootScope.$broadcast(name, object);
            };
            this.$inject = ["$rootScope", "$"];
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessDashboardHub");
            this.hub.on("runningServerProcessComplete", function (object) {
                _this.broadcast("runningServerProcessComplete", object);
            });
            this.hub.on("runningServerProcessUpdate", function (object) {
                _this.broadcast("runningServerProcessUpdate", object);
            });
            this.hub.on("runningServerProcessRunStart", function (object) {
                _this.broadcast("runningServerProcessRunStart", object);
            });
            this.hub.on("runningServerProcessKill", function (object) {
                _this.broadcast("runningServerProcessKill", object);
            });
            this.hub.on("runningServerProcessPause", function (object) {
                _this.broadcast("runningServerProcessPause", object);
            });
            this.hub.on("runningServerProcessReStart", function (object) {
                _this.broadcast("runningServerProcessReStart", object);
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        ServerProcessSignalRService.serviceId = "serverProcessSignalRService";
        return ServerProcessSignalRService;
    })();
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessSignalRService.js.map