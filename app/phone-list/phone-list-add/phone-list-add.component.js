'use strict';


var phoneList = angular.module('phoneList');

function PhoneListAdd() {
    var ctrl = this;
        ctrl.form = {};
        ctrl.submit = submitFunc;


    function submitFunc() {
        ctrl.appendData({text: ctrl.form.text});
        ctrl.form = {text: ''};
        return false;
    }

}

//PhoneListAdd.$inject = [];

phoneList.component('phoneListAdd', {
    bindings: {
      appendData: '&',
    },
    restrict: 'E',
    templateUrl: 'phone-list/phone-list-add/phone-list-add.template.html',
    controller: PhoneListAdd
});
