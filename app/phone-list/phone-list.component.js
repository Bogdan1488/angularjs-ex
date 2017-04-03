'use strict';

var phoneList = angular.module('phoneList');

function phoneListController(PhoneData) {
  var ctrl = this;
      ctrl.data = PhoneData.getData();
      ctrl.appendData = appendData;



  function appendData(text) {
      if (!Array.isArray(ctrl.data)) ctrl.data = [];
      if (text) ctrl.data.push({id: Math.floor(Math.random()*999), text: text});
  }


}

phoneListController.$inject = ['PhoneData'];

phoneList.component('phoneList', {
    restrict: 'E',
    templateUrl: 'phone-list/phone-list.template.html',
    controller: phoneListController
});
