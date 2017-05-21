
(function () {
    app.controller("CelebsListCtrl", ["$scope", "RequestService", CelebsListCtrl]);

    function CelebsListCtrl($scope, RequestService) {
        var vm = this;

        vm.$onInit = function () {
            RequestService.initial().then(function (response) {
                vm.celebs = response.data;
            });
        }
        
        vm.save = function () {
            RequestService.save(vm.celeb).then(function (response) {
                vm.celebs = response.data;
            });
            InitPage();
        }

        vm.del = function (id) {
            RequestService.del(id).then(function (response) {
                vm.celebs = response.data;
            });
        }

        vm.put = function (celeb) {
            if (!vm.isCreate) {
                vm.isCreate = true;
            }
            vm.celeb = angular.copy(celeb);
        }

        vm.create = function () {
            return vm.isCreate = !vm.isCreate;
        }

        function InitPage(current) {
            vm.celeb = null;
            vm.create();
        }

        $scope.$watch("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })

        $scope.$watch("vm.celebs", function (newValue) {
            vm.celebs = newValue;
        }, true)
    }
}());
