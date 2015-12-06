module ServerProcessModule {
    
    class ServerProcessUow {
    
        public $inject: string[] = ["runningServerProcessService","serverProcessService"];

        constructor(private runningServerProcessService, private serverProcessService) {
            
        }

        public static serviceId: string = "serverProcessUow";

        public serverProcesses = this.serverProcessService;

        public runningServerProcesses = this.runningServerProcessService;
    }


    angular.module("serverProcess").service(ServerProcessUow.serviceId,(runningServerProcessService, serverProcessService) => new ServerProcessUow(runningServerProcessService, serverProcessService));

}