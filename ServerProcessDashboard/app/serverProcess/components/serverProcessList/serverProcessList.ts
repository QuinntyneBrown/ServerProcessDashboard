module ServerProcessModule {

    class ServerProcessList {

        public static componentId: string = "serverProcessList";

        public replace: boolean = true;

        public restrict: string = "E";

        public templateUrl: string = "/app/serverProcess/components/serverProcessList/serverProcessList.html";

        public scope: any = {};

        public link = (scope, element, attributes) => {

            scope.vm = {};

            scope.vm.remove = (entity) => {
                return this.serverProcessService.remove({ id: entity.id }).then(() => {

                    for (var i = 0; i < scope.vm.entities.length; i++) {
                        if (scope.vm.entities[i].id == entity.id) {
                            scope.vm.entities.splice(i, 1);
                        }
                    }

                }).catch((error) => {

                });
            }

            scope.vm.run = (entity) => {
                return this.serverProcessService.run(
                    {
                        stepName: "stepName",
                        serverProcessName: entity.name
                    }).then((result) => {
                    //this.$location.path("/runningserverprocess/" + result.guid);
                }).catch((error) => {

                });                
            }

            return this.serverProcessService.getAll().then((results) => {
                return scope.vm.entities = results;
            });
        }

        public $inject: string[] = ["$location", "serverProcessService"];

        constructor(private $location, private serverProcessService) {

        }
    }

    angular.module("serverProcess").directive(ServerProcessList.componentId,($location,serverProcessService) => new ServerProcessList($location, serverProcessService));

}