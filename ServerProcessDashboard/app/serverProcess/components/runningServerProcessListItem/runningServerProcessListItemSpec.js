describe("RunningServerProcessListItem Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("serverProcess");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/serverProcess/components/runningServerProcessListItem/runningServerProcessListItem.html", getStringFromUrl("/app/serverProcess/components/runningServerProcessListItem/runningServerProcessListItem.html"));
        element = angular.element("<running-server-process-list-item></running-server-process-list-item>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
