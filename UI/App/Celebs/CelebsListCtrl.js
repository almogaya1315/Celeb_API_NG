
(function () {
    angular.module("CelebPage")
           .controller("CelebsListCtrl", ["CelebResource", CelebsListCtrl]);

    function CelebsListCtrl(CelebResource) { 
    
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
        //    vm.celebs = data;
        //});
    }
}());
