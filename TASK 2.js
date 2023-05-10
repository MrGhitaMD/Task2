function findBestMatch(k, arr) {
  let bestMatch = arr[0];
  let smallestDiff = Math.abs(k - bestMatch);

  for (let i = 1; i < arr.length; i++) {
    let currentDiff = Math.abs(k - arr[i]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      bestMatch = arr[i];
    }
  }

  return bestMatch;
}
