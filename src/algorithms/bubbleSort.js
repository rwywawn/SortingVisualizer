export default function bubbleSortStart(array) {
  let animations = [];
  bubbleSort(array,animations);
  console.log(animations);
  console.log(array);
  return animations;
}

function bubbleSort(array, animations) {
  if (array.length < 2) return animations;
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < array.length - 1; j++) {
        animations.push([j, j+1, null, null]);
        animations.push([j, j+1, null, null]);
        if (array[j] > array[j + 1]) {
        swap(j, j + 1, array, animations);
        swapped = true;
      }
    }
    if (!swapped) return array;
  }

  return animations;
}

function swap(ind1, ind2, array, animations) {
  animations.push([ind1, ind2, array[ind2], array[ind1]]);
  animations.push([ind1, ind2, null, null]);
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
  return animations;
}
