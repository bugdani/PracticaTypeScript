(() => {
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;
    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("No tenes dinero vieja");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };

  retirarDinero(1299)
    .then((mensaje) => console.log(`Te queda ${mensaje}`))
    .catch((err) => console.warn(err));
})();
