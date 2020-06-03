(function () {
  //Funciones de flecha

  const sumarN = function (a: number, b: number) {
    return a + b;
  };

  const sumarF = (a: number, b: number) => a + b;

  const hulk = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} el mejor!!`);
      }, 1000);
    },
  };

  hulk.smash();
})();
