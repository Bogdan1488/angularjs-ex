'use strict';

var phoneList = angular.module('phoneList');



phoneList.component('phoneListShow', {
    restrict: 'E',
    bindings: {
      data: '<'
    },
    templateUrl: 'phone-list/phone-list-show/phone-list-show.template.html'
});

