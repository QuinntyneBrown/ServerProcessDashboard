 module DashboardModule {
     
     function serverProcessDashboardSignalRService($rootScope) {
         
     }

     serverProcessDashboardSignalRService.$inject = ["$rootScope"];


     class ServerProcessDashboardSignalRService {
         
         public $inject = ["$rootScope", "$"];

         public static serviceId = "serverProcessDashboardSignalRService";

         public connection: any = null;

         public hub:any = null;

         public run = (name: string, step: string) => {
             this.hub.invoke("run", name, step);
         }
         public runStart = () => {
             this.$rootScope.$broadcast("runStart");
         }

         public broadcast = (name, object) => {
             this.$rootScope.$broadcast(name, object);
         }

         constructor(private $rootScope, private $) {

             this.connection = this.$.hubConnection();

             this.hub = this.connection.createHubProxy("serverProcessDashboardHub");

             
             this.hub.on("runningServerProcessStart",(object) => {
                 this.broadcast("runningServerProcessStart", object);
             });

             this.hub.on("runningServerProcessComplete",(object) => {
                 this.broadcast("runningServerProcessComplete", object);
             });

             this.hub.on("runningServerProcessUpdate",(object) => {
                 this.broadcast("runningServerProcessUpdate", object);
             });


             this.connection.start(() => {

             });

             this.$rootScope.$on("serverProcessRunRequest",(event, object) => {
                 this.run(object.entity.name, object.entity.step);
             });
         }
     }

     angular.module("dashboard")
         .service(ServerProcessDashboardSignalRService.serviceId, ($rootScope,$) => new ServerProcessDashboardSignalRService($rootScope, $));

 }