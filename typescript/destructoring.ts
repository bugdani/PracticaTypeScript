(() => {
  const avanger = {
    nombre: "Chapulin colorado",
    clave: "Chiquitolina",
    poder: "Chipote chillon",
  };

  console.log(avanger.nombre);
  console.log(avanger.clave);
  console.log(avanger.poder);

  //Aplicando destructoring quedaria asi>
  const { nombre, clave, poder } = avanger;
  console.log(nombre);
  console.log(clave);
  console.log(poder);

  //Aplicando destructoring como argumento
  const extraer = ({ nombre, clave }: any) => {
    console.log(nombre);
    console.log(clave);
  };
  extraer(avanger);

  //Destructoring de arrays
  const avangers: string[] = ["thor", "hulk", "ironman"];

  const extraerAvangersSinDestructoring = (perroLoco: any) => {
    console.log(perroLoco[1]);
  };
  extraerAvangersSinDestructoring(avangers);

  const extraerAvangersConDestructoring = ([thor, hulk, ironman]: string[]) => {
    console.log(ironman);
  };
  extraerAvangersConDestructoring(avangers);
})();
