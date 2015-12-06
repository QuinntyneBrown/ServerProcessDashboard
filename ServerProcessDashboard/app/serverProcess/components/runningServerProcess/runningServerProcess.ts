module ServerProcessModule {

    "use strict";

    class RunningServerProcess {

        public $inject: string[] = ["$rootScope","$routeParams","serverProcessUow"];

        constructor(private $rootScope, private $routeParams, private serverProcessUow) {

        }

        public static componentId: string = "runningServerProcess";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {

		};

        public templateUrl: string = "/app/serverProcess/components/runningServerProcess/runningServerProcess.html";

        public link = (scope, element, attributes) => {

            var guid = this.$routeParams.runningserverprocessguid;

            scope.$on("runningServerProcessUpdate",(event, object) => {
                if (object == scope.entity.guid) {
                    scope.entity.executionState = 1;
                    scope.$digest();
                }
            });

            scope.$on("runningServerProcessComplete",(event, object) => {
                if (object == scope.entity.guid) {
                    scope.entity.executionState = 2;
                    scope.$digest();
                }
            });

            if (guid) {
                return this.serverProcessUow.runningServerProcesses.getByGuid(guid).then((results) => {
                    scope.entity = results;
                }).catch((error) => {
                
                });
            }


        }

    }

    angular.module("serverProcess").directive(RunningServerProcess.componentId,($rootScope, $routeParams, serverProcessUow) => new RunningServerProcess($rootScope, $routeParams, serverProcessUow));

}
