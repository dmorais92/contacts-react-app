export default function chunk(array, chunks) {
  const result = [];
  if (array && array.length) {
    let arrayItterator = 0;
    while (arrayItterator < array.length) {
      let chunk = [];
      let i = 0;
      while (i < chunks) {
        if (array.indexOf(array[arrayItterator + i]) !== -1) {
          chunk.push(array[arrayItterator + i]);
        }
        i ++;
      }
      if (chunk.length) {
        result.push(chunk);
      }
      arrayItterator += i;
    }
  }
  return result;
}