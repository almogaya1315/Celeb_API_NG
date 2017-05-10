
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

        vm.save = function (celeb) {
            if (vm.celebs.)
            vm.celebs.push(vm.celeb);
            //CelebResource.query()
        }

        vm.del = function (index) {
            vm.celebs.splice(index, 1); // find(c => c.name = celeb.name);
        }

        vm.put = function (celeb) {
            if (!vm.isCreate){
                vm.isCreate = true;
            }
            vm.celeb = celeb;
        }

        $scope.$watch("vm.celeb", function (newValue) {
            vm.celeb = newValue;
        })
    }
}());
