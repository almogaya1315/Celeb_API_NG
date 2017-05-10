
(function () {
    app.factory("CelebResource", ["$resource", "appSettings", celebResource])

    function celebResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/Celebs");
    }
}());