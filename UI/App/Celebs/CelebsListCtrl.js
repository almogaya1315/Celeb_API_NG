
(function () {
    app.controller("CelebsListCtrl", ["CelebResource", "$scope", "$http", CelebsListCtrl]);

    function CelebsListCtrl(CelebResource, $scope, $http) {

        var vm = this;
        var baseUrl = "http://localhost:56399/api/celebs";

        $http({
            method: "get",
            url: baseUrl,
        }).then(function (response) {
            vm.celebs = response.data;
        });

        //vm.celebs = [
        //{
        //    "name": "Test1",
        //    "age": 54,
        //    "country": "Test1"
        //},
        //{
        //    "name": "Test2",
        //    "age": 12,
        //    "country": "Test2"
        //}];

        //CelebResource.query(function (data) {
        //    vm.celebs = data;
        //});

        vm.create = function () {
            vm.isCreate = !vm.isCreate;
        }

        vm.save = function () {
            var c;
            for (var i = 0; i < vm.celebs.length; i++) {
                if (vm.celebs[i].id == vm.celeb.id)
                    c = vm.celebs[i];
            }

            //var c = vm.celebs.find(c => c.id == vm.celeb.id)

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
