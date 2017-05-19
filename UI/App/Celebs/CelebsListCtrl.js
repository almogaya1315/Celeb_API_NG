
(function () {
    app.controller("CelebsListCtrl", ["$scope", "RequestService", CelebsListCtrl]);

    function CelebsListCtrl($scope, RequestService) {
        var vm = this;

        vm.celebs = RequestService.initial();

        vm.save = function () {
            vm.celeb = RequestService.save(vm.celebs, vm.celeb);
            InitPage(vm.celeb);
        }

        vm.del = function (index, id) {
            var index = RequestService.del(index, id);
            vm.celebs.splice(index, 1);
        }

        vm.put = function (celeb) {
            if (!vm.isCreate) {
                vm.isCreate = true;
            }
            vm.celeb = RequestService.put(celeb);
        }

        vm.create = function () {
            return isCreate = !isCreate;
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
