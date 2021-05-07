angular.module('BOSapiclient', ['ngMaterial', 'ngMessages'])
    .config(['$httpProvider', '$qProvider', function ($httpProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
        // $httpProvider.defaults.withCredentials = true;
    }])

    .run(['$rootScope', '$http', function ($rootScope, $http) {
        $http.get('config.json?_=' + Date.now(), { cache: false }).then(function (data) {
            $rootScope.commandslist = data.data;
        });
    }])

    .controller('commandController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        $scope.copyToClipboard = function (name) {
            var copyElement = document.createElement("textarea");
            copyElement.style.position = 'fixed';
            copyElement.style.opacity = '0';
            copyElement.textContent = 'http://example.com?from=' + decodeURI(name);
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            body.removeChild(copyElement);
        }
    }])
