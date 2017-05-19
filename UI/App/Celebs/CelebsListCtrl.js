
(function () {
    app.controller("CelebsListCtrl", ["$scope", "RequestService", CelebsListCtrl]);

    function CelebsListCtrl($scope, RequestService) {
        var vm = this;

        RequestService.initial();

        vm.create = RequestService.create();

        $scope.$watch("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })

        $scope.$watch("vm.celebs", function (newValue) {
            vm.celebs = newValue;
        }, true)
    }
}());
