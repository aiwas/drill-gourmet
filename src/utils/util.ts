/**
 * Enumerable.Range
 * @param start 
 * @param count 
 * @see https://zenn.dev/uhyo/articles/array-n-keys-yamero
 */
export function* range(start: number, count: number) {
  for (let i = start; i <= count; i++) {
    yield i;
  }
}
