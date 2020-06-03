"use strict";
(function () {
    console.log("inicio");
    var promesa1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("se lanzo reject");
        }, 2000);
    });
    //Recibo valor que estoy mandando en el reject
    promesa1.catch(function (err) { return console.log(err); });
})();
