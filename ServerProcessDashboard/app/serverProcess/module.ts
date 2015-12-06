module ServerProcessModule {

    var app = angular.module("serverProcess", [
            "configuration",
            "common",
            "core",
            "session",
            "security",
            "ngRoute"
        ])
        .config(config)
        .run(run);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {
        
        $routeProvider.when("/serverProcess/add",
            {
                templateUrl: "app/serverProcess/templates/add.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
                
            });

        $routeProvider.when("/serverProcess/run/:runserverprocessid",
            {
                templateUrl: "app/serverProcess/templates/runserverprocess.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider.when("/serverProcess/run",
            {
                templateUrl: "app/serverProcess/templates/runserverprocess.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider.when("/serverprocess/list",
            {
                templateUrl: "app/serverProcess/templates/list.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true

            });

        $routeProvider.when("/serverprocess",
            {
                templateUrl: "app/serverProcess/templates/list.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true

            });

        $routeProvider.when("/runningserverprocess/list",
            {
                templateUrl: "app/serverProcess/templates/runningserverprocesslist.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true

            });

        $routeProvider.when("/runningserverprocess/:runningserverprocessguid",
            {
                templateUrl: "app/serverProcess/templates/runningserverprocess.html",
                resolve: {
                    routeData: [
                        "serverProcessRouteResolver", (serverProcessRouteResolver) => {
                            return serverProcessRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true

            });



    }

    function run() {

    }

}