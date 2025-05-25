Fonctions de manipulation de chaînes
1. Inverser une chaîne
function reverseString(str) {
  return str.split('').reverse().join('');
}
2. Compter les caractères
function countCharacters(str) {
  return str.length;
}
3. Mettre en majuscule la première lettre de chaque mot
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
       Fonctions du tableau
4. Trouver le minimum
function findMin(arr) {
  return Math.min(...arr);
}
5. Trouver le maximum
function findMax(arr) {
  return Math.max(...arr);
}
6. Somme du tableau
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
7. Filtrer un tableau 
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);

 Fonctions mathématiques
8. Factorielle
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
9. Vérification de nombre premier
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
10. Suite de Fibonacci jusqu’à un certain nombre de termes
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
