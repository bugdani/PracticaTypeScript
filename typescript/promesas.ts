(() => {
  console.log("inicio");
  const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("se lanzo reject");
    }, 2000);
  });
  //Recibo valor que estoy mandando en el reject
  promesa1.catch((err) => console.log(err));
})();
