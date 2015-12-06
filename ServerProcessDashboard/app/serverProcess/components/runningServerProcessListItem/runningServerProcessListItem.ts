module ServerProcessModule {

    "use strict";

    class RunningServerProcessListItem {

        public $inject: string[] = ["serverProcessUow"];

        constructor(private serverProcessUow) {

        }

        public static componentId: string = "runningServerProcessListItem";

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {
		    entity:"="
		};

        public templateUrl: string = "/app/serverProcess/components/runningServerProcessListItem/runningServerProcessListItem.html";

        public link = (scope, element, attributes) => {

            scope.$on("runningServerProcessUpdate",(event, object) => {
                if (object.guid == scope.entity.guid) {
                    scope.entity.executionState = object.executionState;
                    scope.$digest();
                }
            });
        }

    }

    angular.module("serverProcess").directive(RunningServerProcessListItem.componentId,(serverProcessUow) => new RunningServerProcessListItem(serverProcessUow));

}
