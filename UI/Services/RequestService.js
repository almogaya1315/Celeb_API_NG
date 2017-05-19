
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

        function save(celebs, current) {
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
                });

                return c;
            }
            else {
                celebs.push(current);

                $http({
                    method: "post",
                    url: baseUrl,
                    data: vm.celeb
                });

                return current;
            }
        }

        function del(index, id) {
            var delUrl = baseUrl + "/" + id;
            $http({
                method: "delete",
                url: delUrl
            });
            return index;
        }

        function put(celebs, celeb) {
            var c = angular.copy(celeb);
            save(celeb, c);
            return c;
        }
    }
}());