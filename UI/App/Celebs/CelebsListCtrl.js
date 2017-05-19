
(function () {
    app.controller("CelebsListCtrl", ["$scope", "RequestService", CelebsListCtrl]);

    function CelebsListCtrl($scope, RequestService) {
        var vm = this;

        vm.celebs = RequestService.initial();

        vm.create = RequestService.create(vm.isCreate);

        vm.save = RequestService.save(vm.celebs, vm.celeb, vm.isCreate);

        $scope.$watch("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })

        $scope.$watch("vm.celebs", function (newValue) {
            vm.celebs = newValue;
        }, true)
    }
}());
