export function getRandom(min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getRandomFromArray(array: any[]) {
  return array[getRandom(0, array.length - 1)]
}
