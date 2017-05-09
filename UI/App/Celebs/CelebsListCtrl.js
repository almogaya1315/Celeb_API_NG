
(function () {
    angular.module("CelebPage", [])
    .controller("CelebsListCtrl", ["celebResource", CelebsListCtrl]);

    function CelebsListCtrl(celebResource) {
        var vm = this;

        celebResource.query(function (data) {
            vm.celebs = data;
        });
    }
}());
