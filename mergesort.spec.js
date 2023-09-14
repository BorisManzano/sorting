describe("Split", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 5, 3, 4, 5, 6, 7])).toEqual([
      [1, 5, 3, 4],
      [5, 6, 7],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 2, 3, 4], [5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});