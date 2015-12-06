var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessUow = (function () {
        function ServerProcessUow(runningServerProcessService, serverProcessService) {
            this.runningServerProcessService = runningServerProcessService;
            this.serverProcessService = serverProcessService;
            this.$inject = ["runningServerProcessService", "serverProcessService"];
            this.serverProcesses = this.serverProcessService;
            this.runningServerProcesses = this.runningServerProcessService;
        }
        ServerProcessUow.serviceId = "serverProcessUow";
        return ServerProcessUow;
    })();
    angular.module("serverProcess").service(ServerProcessUow.serviceId, function (runningServerProcessService, serverProcessService) { return new ServerProcessUow(runningServerProcessService, serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessUow.js.map