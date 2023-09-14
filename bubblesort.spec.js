describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un arreglo desordenado debe terminar ordenado", function () {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
  it("Un arreglo ordenado debe mantenerse ordenado", function () {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("Un arreglo a la inversa debe terminar ordenado", function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Swap", function () {
  it("la función swap debería ejecutarse 2 veces", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([3, 1, 2, 4, 5]);
    expect(swap.calls.count()).toEqual(2);
  });
});