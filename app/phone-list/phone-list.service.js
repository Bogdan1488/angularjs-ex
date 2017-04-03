
var phoneList = angular.module('phoneList');

function randStr(len) {
    var rnd = function() {
        if (Math.random() > 0.5) return Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        else return Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    }
    var arr = [];
    for (var i=0; i<len; i++) arr.push(rnd());
    return String.fromCharCode.apply(null, arr);
}


function phoneData() {
    var serv = this;

    this.data = [];

    for (var i=0; i<15; i++) {
        this.data.push({id: Math.floor(Math.random() * (999 - 100 + 1)) + 100, text: randStr(20)});
    }



    this.getData = function() {
        return serv.data;
    }

}

phoneList.service('PhoneData', phoneData);