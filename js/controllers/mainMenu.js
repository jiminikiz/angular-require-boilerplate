define(function(){
    function mainMenu($scope) {
        $scope.title = 'Avarus';
    }
    angular.module('avarus').controller('mainMenu', mainMenu);

    window.app = {};
});
