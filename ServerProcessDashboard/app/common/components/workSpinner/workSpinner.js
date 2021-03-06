var CommonModule;
(function (CommonModule) {
    "use strict";
    var workSpinner = function ($rootScope, requestCounter) {
        return {
            restrict: "E",
            scope: {},
            //template: "<div ng-show='requestCount' class='work-spinner'><img src='images/common/ajax-loader.gif' /></div>",
            template: "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>",
            link: function (scope) {
                scope.$watch(function () {
                    return requestCounter.getRequestCount();
                }, function (requestCount) {
                    scope.requestCount = requestCount;
                });
            }
        };
    };
    var componentId = "workSpinner";
    workSpinner.$inject = ["$rootScope", "requestCounter"];
    angular.module("common").directive(componentId, workSpinner);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=workSpinner.js.map