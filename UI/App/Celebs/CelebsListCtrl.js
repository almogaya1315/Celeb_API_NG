
(function () {
    app.controller("CelebsListCtrl", ["$scope", "$http", CelebsListCtrl]);

    function CelebsListCtrl($scope, $http) {

        var vm = this;
        var baseUrl = "http://localhost:56399/api/celebs";

        $http({
            method: "get",
            url: baseUrl,
        }).then(function (response) {
            vm.celebs = response.data;
        });

        vm.create = function () {
            vm.isCreate = !vm.isCreate;
        }

        vm.save = function () {
            var c;
            for (var i = 0; i < vm.celebs.length; i++) {
                if (vm.celebs[i].id == vm.celeb.id)
                    c = vm.celebs[i];
            }

            if (c) {
                c = vm.celeb;
                var putUrl = baseUrl + "/" + c.id;
                var data = { "name": c.name, "age": c.age, "country": c.country }
                $http({
                    method: "put",
                    url: putUrl,
                    data: data
                }).then(vm.InitPage());
            }
            else {
                vm.celebs.push(vm.celeb);

                $http({
                    method: "post",
                    url: baseUrl,
                    data: vm.celeb
                }).then(vm.InitPage())
            }
        }

        vm.InitPage = function () {
            vm.celeb = null;
            vm.create();
        }


        vm.del = function (index, id) {
            var delUrl = baseUrl + "/" + id;
            $http({
                method: "delete",
                url: delUrl
            });
            vm.celebs.splice(index, 1);
        }

        vm.put = function (celeb) {
            if (!vm.isCreate) {
                vm.isCreate = true;
            }
            vm.celeb = angular.copy(celeb);
        }

        $scope.$watch("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })

        $scope.$watch("vm.celebs", function (newValue) {
            vm.celebs = newValue;
        }, true)
    }
}());
