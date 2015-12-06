module ServerProcessModule {

    "use strict";

    angular.module("serverProcess")
        .service("serverProcessSignalRService",($rootScope, $) => new ServerProcessSignalRService($rootScope, $));

    class ServerProcessSignalRService {

        public static serviceId: string = "serverProcessSignalRService";

        public connection: any = null;

        public hub: any = null;

        public run = (name: string, step: string) => {
            this.hub.invoke("run", name, step);
        }
        public broadcast = (name,object) => {
            this.$rootScope.$broadcast(name,object);
        }

        public $inject = ["$rootScope","$"];

        constructor(private $rootScope, private $) {

            this.connection = this.$.hubConnection();

            this.hub = this.connection.createHubProxy("serverProcessDashboardHub");

            this.hub.on("runningServerProcessComplete",(object) => {
                this.broadcast("runningServerProcessComplete", object);
            });

            this.hub.on("runningServerProcessUpdate",(object) => {
                this.broadcast("runningServerProcessUpdate", object);
            });

            this.hub.on("runningServerProcessRunStart",(object) => {
                this.broadcast("runningServerProcessRunStart", object);
            });

            this.hub.on("runningServerProcessKill",(object) => {
                this.broadcast("runningServerProcessKill", object);
            });

            this.hub.on("runningServerProcessPause",(object) => {
                this.broadcast("runningServerProcessPause", object);
            });

            this.hub.on("runningServerProcessReStart",(object) => {
                this.broadcast("runningServerProcessReStart", object);
            });

            this.connection.start(() => {

            });

            this.$rootScope.$on("serverProcessRunRequest",(event, object) => {
                this.run(object.entity.name, object.entity.step);
            });
        }
    }

}


