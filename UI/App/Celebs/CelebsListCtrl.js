
(function () {
    angular.module("CelebPage", [])
    .controller("list", CelebsListCtrl); // "celebResource"

    function CelebsListCtrl() { // celebResource
        var list = this;

        list.celebs =
        {
            "name": "Test1",
            "age": 54,
            "country": "Test1"
        };

        //celebResource.query(function (data) {
        //    vm.celebs = data;
        //});
    }
}());
