
(function () {
    angular.module("resource")
    .factory("celebResource", ["$resource", "appSettings", celebResource])

    function celebResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/Celeb/:id")
    }
}());