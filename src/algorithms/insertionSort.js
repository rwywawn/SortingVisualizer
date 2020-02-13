export default function insertionSortStart(array) {
  let animations = [];
  if (array.length < 2) return animations;
  insertionSort(array, animations);
  console.log(animations);
  console.log(animations.length);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    let mini = [];
    while (j >= 0 && array[j] > current) {
      animations.push([true, [j, i]]);
      animations.push([true, [j, i]]);
      mini.push([j + 1, array[j]]);
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
    mini.push([j + 1, current]);
    animations.push([false,mini]);
    animations.push([false,mini]);
    
  }

  return animations;
}
// let test=[4,324,34,2,2341,23,4,234,23,421,234,4321];
// insertionSortStart(test)