export function nyert(lista, jatekos) {
  const nyeroEset = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < nyeroEset.length; i++) {
    const a = nyeroEset[i][0];
    const b = nyeroEset[i][1];
    const c = nyeroEset[i][2];

    if (
      lista[a] === jatekos &&
      lista[b] === jatekos &&
      lista[c] === jatekos
    ) {
      return true;
    }
  }

  return false;
}