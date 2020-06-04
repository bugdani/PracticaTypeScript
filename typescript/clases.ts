(() => {
  //Creacion de clases
  class Advanger {
    constructor(
      public nombre: string,
      public equipo: string,
      public puedePelear: boolean,
      public peleasGanadas: number
    ) {}
  }

  //Inicializando objeto
  const antman = new Advanger("pepe", "las divinas", true, 3);

  console.log(antman);
})();
