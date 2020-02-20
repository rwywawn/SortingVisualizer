export default function countSortStart(array) {
  let animations = [];
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    animations.push([i, i, null, null]);
    animations.push([i, i, null, null]);
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  if (array.length < 2) return animations;
  countSort(array, min, max, animations);
  return animations;
}

function countSort(array, min, max, animations) {
  let i = min;
  let j = 0;
  let length = array.length;
  let temp = [];
  for (i; i <= max; i++) {
    temp[i] = [0, []];
  }
  for (i = 0; i < length; i++) {
    animations.push([i, i, null, null]);
    animations.push([i, i, null, null]);
    temp[array[i]][0]++;
    temp[array[i]][1].push(i);
  }
  for (i = min; i <= max; i++) {
    while (temp[i][0] > 0) {
      animations.push([
        j,
        temp[i][1][temp[i][0] - 1],
        i,
        array[temp[i][1][temp[i][0] - 1]]
      ]); // whoops this is probably confusing
      animations.push([j, temp[i][1][temp[i][0] - 1], null, null]);
      array[j] = i;
      j++;
      temp[i][0]--;
      temp[i][1].pop();
    }
  }

  return animations;
}
