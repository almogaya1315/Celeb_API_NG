
(function () {
    app.factory("RequestService", ["$http", ReqOperations]);

    function ReqOperations($http) {

        var baseUrl = "http://localhost:56399/api/celebs";

        function initial() {
            $http({
                method: "get",
                url: baseUrl,
            }).then(function (response) {
                return response.data;
            })
        };

        function create (isCreate) {
            return isCreate = !isCreate;
        }

        function save (celebs, current, isCreate) {
            var c;
            for (var i = 0; i < celebs.length; i++) {
                if (celebs[i].id == current.id)
                    c = celebs[i];
            }

            if (c) {
                c = current;
                var putUrl = baseUrl + "/" + c.id;
                var data = { "name": c.name, "age": c.age, "country": c.country }
                $http({
                    method: "put",
                    url: putUrl,
                    data: data
                }).then(InitPage(current, isCreate));
            }
            else {
                celebs.push(current);

                $http({
                    method: "post",
                    url: baseUrl,
                    data: vm.celeb
                }).then(InitPage(current, isCreate))
            }
        }

        function InitPage (current, isCreate) {
            current = null;
            create(isCreate);
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