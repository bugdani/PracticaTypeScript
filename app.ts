(function () {
  //Funcion que tiene 3 parametros: quien es obligatorio, momento opcional y objeto opcional con valor por defecto
  function activar(
    quien: string,
    momento?: string,
    objeto: string = "batisenal"
  ) {
    if (momento) {
      console.log(`${quien} activo la ${objeto} en ${momento}`);
    } else {
      console.log(`${quien} activo la ${objeto}`);
    }
  }

  activar("Loly");
})();
