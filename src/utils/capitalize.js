export default function capitalize(string) {
  if (string) {
    const splitWord = String(string).split('');
    splitWord[0] = splitWord[0].toUpperCase();
    return splitWord.join('')
  }
}