"use strict";
(function () {
    var avanger = {
        nombre: "Chapulin colorado",
        clave: "Chiquitolina",
        poder: "Chipote chillon",
    };
    console.log(avanger.nombre);
    console.log(avanger.clave);
    console.log(avanger.poder);
    //Aplicando destructoring quedaria asi>
    var nombre = avanger.nombre, clave = avanger.clave, poder = avanger.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //Aplicando destructoring como argumento
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        console.log(nombre);
        console.log(clave);
    };
    extraer(avanger);
    //Destructoring de arrays
    var avangers = ["thor", "hulk", "ironman"];
    var extraerAvangersSinDestructoring = function (perroLoco) {
        console.log(perroLoco[1]);
    };
    extraerAvangersSinDestructoring(avangers);
    var extraerAvangersConDestructoring = function (_a) {
        var thor = _a[0], hulk = _a[1], ironman = _a[2];
        console.log(ironman);
    };
    extraerAvangersConDestructoring(avangers);
})();
