export default function mergeSortStart(array) {
  let aux = array.slice();
  let animate = [];
  if (array.length < 2) return animate;
  mergeDivider(array, 0, array.length - 1, aux, animate);
  return animate;
}

function mergeDivider(array, low, high, aux, animate) {
  if (low === high) return array;
  const mid = Math.floor((low + high) / 2);
  mergeDivider(aux, low, mid, array, animate);
  mergeDivider(aux, mid + 1, high, array, animate);
  merger(array, low, mid, high, aux, animate);
}

function merger(array, low, mid, high, aux, animate) {
  let i = low;
  let j = low;
  let k = mid + 1;

  while (i <= mid && k <= high) {
    animate.push([i, k, null]);
    animate.push([i, k, null]);
    if (aux[i] <= aux[k]) {
      animate.push([j, i, aux[i]]);
      animate.push([j, j, null]);
      array[j++] = aux[i++];
    } else {
      animate.push([j, i, aux[k]]);
      animate.push([j, j, null]);
      array[j++] = aux[k++];
    }
  }

  while (i <= mid) {
    animate.push([i, mid, null]);
    animate.push([i, mid, null]);
    animate.push([j, i, aux[i]]);
    animate.push([j, j, null]);
    array[j++] = aux[i++];
  }

  while (k <= high) {
    animate.push([k, high, null]);
    animate.push([k, high, null]);
    animate.push([j, k, aux[k]]);
    animate.push([j, j, null]);
    array[j++] = aux[k++];
  }
}
