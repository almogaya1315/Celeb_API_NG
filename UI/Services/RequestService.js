
(function () {
    app.factory("RequestService", ["$http", "$log", ReqOperations]);

    function ReqOperations($http, $log) {

        var baseUrl = "http://localhost:56399/api/celebs";

        function initial() {
            return $http({
                method: "get",
                url: baseUrl,
            })
        };

        function save(celeb) {
            if (celeb.id) {
                var putUrl = baseUrl + "/" + celeb.id;
                var data = { "name": celeb.name, "age": celeb.age, "country": celeb.country }
                return $http({
                    method: "put",
                    url: putUrl,
                    data: data
                }).then(r => handelResponse(r));
            }
            else {
                return $http({
                    method: "post",
                    url: baseUrl,
                    data: celeb,
                }).then(r => handelResponse(r));
            }
        }

        function del(id) {
            var delUrl = baseUrl + "/" + id;
            return $http({
                method: "delete",
                url: delUrl
            }).then(r =>  handelResponse(r));
        }

        return { initial: initial, save: save, del: del }
    }

    function handelResponse(response) {
        if (/^20/.test(response.status)) {
            $log.info(response.data);
            return initial();
        }
    }

}());