export default function selectionSortStart(array) {
  let animations = [];
  if (array.length < 2) return animations;
  selectionSort(array, animations);
  console.log(array);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([j, min, null, null]);
      animations.push([j, min, null, null]);
      if (array[j] < array[min]) {
        min = j;
      }
    }

    swap(min, i, array, animations);
    
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
// let test = [123, 3443, 786, 98, 64, 67,8709,657,47,20,90];
// selectionSortStart(test);
