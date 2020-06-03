"use strict";
(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject("No tenes dinero vieja");
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1299)
        .then(function (mensaje) { return console.log("Te queda " + mensaje); })
        .catch(function (err) { return console.warn(err); });
})();
