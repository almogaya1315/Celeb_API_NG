
(function () {
    app.controller("CelebsListCtrl", ["CelebResource", "$scope", CelebsListCtrl]); 

    function CelebsListCtrl(CelebResource, $scope) { 
    
        var vm = this;

        vm.celebs = [
        {
            "name": "Test1",
            "age": 54,
            "country": "Test1"
        },
        {
            "name": "Test2",
            "age": 12,
            "country": "Test2"
        }];

        //CelebResource.query(function (data) {
        //    vm.celebs = JSON.parse(data);
        //});

        vm.create = function () {
            vm.isCreate = !vm.isCreate;
        }

        vm.save = function () {
            var c;
            for (var i = 0; i < vm.celebs.length; i++) {
                if (vm.celebs[i].name == vm.celeb.name)
                  c =  vm.celebs[i];
            }

            //var c = vm.celebs.find(c => c.name == vm.celeb.name)

            if (c) {
                c = vm.celeb;
            }
            else {
                vm.celebs.push(vm.celeb);
            }
            //CelebResource.query()
        }

        vm.del = function (index) {
            vm.celebs.splice(index, 1); // find(c => c.name = celeb.name);
        }

        vm.put = function (celeb) {
            if (!vm.isCreate){
                vm.isCreate = true;
            }
            vm.celeb = angular.copy(celeb);
        }

        $scope.$watchCollection("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })

        $scope.$watch("vm.celebs", function (newValue) {
            vm.celebs = newValue;
        })
    }
}());
