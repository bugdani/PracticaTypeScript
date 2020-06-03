"use strict";
(function () {
    //Funciones de flecha
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " el mejor!!");
            }, 1000);
        },
    };
    hulk.smash();
})();
