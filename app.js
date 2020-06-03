(function() {
    //Funcion que tiene 3 parametros: quien es obligatorio, momento opcional y objeto opcional con valor por defecto
    function activar(quien, momento, objeto) {
        if (objeto === void 0) {
            objeto = "batisenal";
        }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en " + momento);
        } else {
            console.log(quien + " activo la " + objeto);
        }
    }
    activar("Loly");
})();