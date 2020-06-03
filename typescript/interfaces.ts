(() => {
  interface Xmen {
    nombre: string;
    edad: number;
  }

  const enviarMision = (xmen: Xmen) => {
    console.log(xmen.nombre);
  };

  const xmen: Xmen = {
    nombre: "dani",
    edad: 31,
  };

  enviarMision(xmen);
})();
