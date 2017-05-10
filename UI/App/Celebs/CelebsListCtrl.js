
(function () {
    angular.module("CelebPage", [])
    .controller("CelebsListCtrl", ["celebResource", CelebsListCtrl]);

    function CelebsListCtrl(celebResource) {
        var vm = this;

        vm.celebs = [
        {
            "Name": "Test1",
            "Age": 54,
            "Country": "Test1"
        },
        {
            "Name": "Test2",
            "Age": 12,
            "Country": "Tes2"
        }]

        //celebResource.query(function (data) {
        //    vm.celebs = data;
        //});
    }
}());
