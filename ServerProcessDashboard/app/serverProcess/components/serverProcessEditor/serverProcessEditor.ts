module ServerProcessModule {

    "use strict";

    class ServerProcessEditor {

        public static componentId: string = "serverProcessEditor";

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html";

        public link = (scope, element, attributes) => {

            scope.tryToSave = (form) => {
                this.serverProcessUow.serverProcesses.add({ entity: scope.vm.entity }).then(() => {
                    this.$location.path("/serverprocess/list");
                }).catch((error) => {

                });
            }
        }

        public $inject: string[] = ["$location","serverProcessUow"];

        constructor(private $location, private serverProcessUow) {

        }
    }

    angular.module("serverProcess").directive(ServerProcessEditor.componentId,($location, serverProcessUow) => new ServerProcessEditor($location, serverProcessUow));
}
