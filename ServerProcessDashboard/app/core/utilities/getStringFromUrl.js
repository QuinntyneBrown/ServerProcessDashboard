var CoreModule;
(function (CoreModule) {
    "use strict";
    function getStringFromUrl(url) {
        var request = new XMLHttpRequest();
        var response = null;
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    response = request.responseText;
                }
            }
        };
        request.open("GET", url, false);
        request.send(null);
        return response;
    }
    angular.module("core").value("getStringFromUrl", getStringFromUrl);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=getStringFromUrl.js.map