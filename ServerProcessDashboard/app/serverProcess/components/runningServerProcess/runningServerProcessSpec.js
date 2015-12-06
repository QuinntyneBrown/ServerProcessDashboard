describe("RunningServerProcess Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("serverProcess");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/serverProcess/components/runningServerProcess/runningServerProcess.html", getStringFromUrl("/app/serverProcess/components/runningServerProcess/runningServerProcess.html"));
        element = angular.element("<running-server-process></running-server-process>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
