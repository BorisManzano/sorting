function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  }
  let condicion = false;
  while (!condicion) {
    condicion = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        condicion = false;
      }
    }
  }
  return array;
}

function swap(array, posicion1, posicion2) {
  [array[posicion1], array[posicion2]] = [array[posicion2], array[posicion1]];
}