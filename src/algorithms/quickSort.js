export default function quickSortStart(array) {
  let animations = [];
  if (array.length < 2) return animations;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(array, low, high, animations) {
  if (low >= high) return array;
  let index = partition(array, low, high, animations);
  quickSort(array, low, index - 1, animations);
  quickSort(array, index + 1, high, animations);
  console.log(animations);
  return animations;
}

function partition(array, low, high, animations) {
  let index = low;
  let pivot = array[high];
  for (let i = low; i < high; i++) {
    animations.push([i, high, null, null]);
    animations.push([i, high, null, null]);
    animations.push([i, high, null, null]);
    animations.push([i, high, null, null]);
    if (array[i] < pivot) {
      
      swap(i, index, array, animations);
      index++;
    }
  }
  swap(high, index, array, animations);
  return index;
}

function swap(ind1, ind2, array, animations) {
  animations.push([ind1, ind2, array[ind2], array[ind1]]);
  animations.push([ind1, ind2, null,null]);
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
  return animations;
}

