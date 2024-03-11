function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  return result.sort((a, b) => {
    const yearA = a.year;
    const yearB = b.year;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }

    return 0;
  });
  // Rubah code ini dengan array hasil sorting secara ascending
  // return output;
}
