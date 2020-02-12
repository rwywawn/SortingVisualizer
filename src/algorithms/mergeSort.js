export default function mergeSortStart(array) {
  let aux = array.slice();
  let animations = [];
  if (array.length < 2) return animations;
  mergeDivider(array, 0, array.length - 1, aux, animations);
  return animations;
}

function mergeDivider(array, low, high, aux, animations) {
  if (low === high) return array;
  const mid = Math.floor((low + high) / 2);
  mergeDivider(aux, low, mid, array, animations);
  mergeDivider(aux, mid + 1, high, array, animations);
  merger(array, low, mid, high, aux, animations);
}

function merger(array, low, mid, high, aux, animations) {
  let i = low;
  let j = low;
  let k = mid + 1;

  while (i <= mid && k <= high) {
    animations.push([i, k, null, null]);
    animations.push([i, k, null, null]);
    if (aux[i] <= aux[k]) {
      animations.push([j, j, aux[i],aux[i]]);
      animations.push([j, j, null, null]);
      array[j++] = aux[i++];
    } else {
      animations.push([j, j, aux[k],aux[k]]);
      animations.push([j, j, null, null]);
      array[j++] = aux[k++];
    }
  }

  while (i <= mid) {
    animations.push([i, mid, null, null]);
    animations.push([i, mid, null, null]);
    animations.push([j, j, aux[i],aux[i]]);
    animations.push([j, j, null, null]);
    array[j++] = aux[i++];
  }

  while (k <= high) {
    animations.push([k, high, null, null]);
    animations.push([k, high, null, null]);
    animations.push([j, j, aux[k],aux[k]]);
    animations.push([j, j, null, null]);
    array[j++] = aux[k++];
  }
}
