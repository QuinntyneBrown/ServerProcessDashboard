module ServerProcessModule {

    "use strict";

    class RunningServerProcessList {

        public static componentId: string = "runningServerProcessList";

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html";

        public link = (scope, element, attributes) => {

            scope.$on("runningServerProcessUpdate",(event, object) => {
                if (object.executionState == 0) {
                    scope.entities.push(object);
                    scope.$digest();
                }
            });

            if (this.$routeParams.serverprocessid) {
                this.serverProcessUow.runningServerProcess.getAllByServerProcessId({ id: this.$routeParams.serverprocessid }).then((results) => {
                    scope.entities = results;
                }).catch((error) => {

                });
            } else {
                this.serverProcessUow.runningServerProcesses.getAll().then((results) => {
                    scope.entities = results;
                }).catch((error) => {

                });                
            }
        }

        public $inject: string[] = ["$routeParams","serverProcessUow"];

        constructor(private $routeParams, private serverProcessUow) {

        }
    }

    angular.module("serverProcess").directive(RunningServerProcessList.componentId,($routeParams, serverProcessUow) => new RunningServerProcessList($routeParams, serverProcessUow));
}
