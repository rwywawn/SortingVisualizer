export default function heapSortStart(array) {
  let animations = [];
  if (array.length < 2) return animations;
  heapSort(array, animations);
  return animations;
}

function heapSort(array, animations) {
  let length = array.length;
  let start = Math.floor(length / 2 - 1);
  for (let i = start; i >= 0; i--) {
    heapify(array, i, length, animations);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    swap(0, i, array, animations);

    heapify(array, 0, i, animations);
  }
  return animations;
}

function heapify(array, root, length, animations) {
  let largest = root;
  let left = 2 * root + 1;
  let right = 2 * root + 2;

  if (left < length) {
    // sinceleft can refer to an index outside the array, this ensure we animate bars within the arrays
    animations.push([left, largest, null, null]);
    animations.push([left, largest, null, null]);
  }

  if (array[left] > array[largest] && left < length) {
    largest = left;
  }
  if (right < length) {

    // since right can refer to an index outside the array, this ensure we animate bars within the arrays
    animations.push([right, largest, null, null]);
    animations.push([right, largest, null, null]);
  }
  if (array[right] > array[largest] && right < length) {
    largest = right;
  }

  if (largest !== root) {
    swap(largest, root, array, animations);
    heapify(array, largest, length, animations);
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
