
(function () {
    app.factory("RequestService", ["$http", ReqOperations]);

    function ReqOperations($http) {

        var baseUrl = "http://localhost:56399/api/celebs";

        function initial() {
            $http({
                method: "get",
                url: baseUrl,
            }).then(function (response) {
                vm.celebs = response.data;
            })
        };

        function create () {
            return  // vm.isCreate = !vm.isCreate;
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
    }
}());