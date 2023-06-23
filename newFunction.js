// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const quantityWords = message.split(" ").length;
//   // return quantityWords*pricePerWord
//   return quantityWords
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)
//   const res = []
//   for (let i = 0; i<array1.length; i+=1){
//       if (array2.includes(array1[i])){
//         res.push(array1[i])
//       }
//     }
// return res;
// const object = {
//   name: "Mango",
//   age: 2
// }
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object)
//   {
//     console.log(key);
// }
// }
// countProps(object);
//
//
// function doStuffWithBook(title, numberOfPages, rating) {
//   console.log(title);
//   console.log(numberOfPages);
// }
// console.log(123);
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38);"Stone skin"
// Функція приймає рядок friendName та  має знайти друга з таким імям і повернути текст "Знайшли", в противному випадку повернути рядок  "Не знайшли"
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];
// function findFriendByName(friendName) {
//   for (const friend of friends) {
//     if (friend.name === friendName) {
//       return "Знайшли"
//     }
//   }
//   return "Не знайшли"
// }
// Задача 2. Создайте массив из 20 случайных чисел в диапазоне от 1 до 100. Выведите в консоль или с помощью document.write():
//   все четные числа этого массива
//   все числа, которые делятся на 3
//   все числа, которые делятся на 5
//   все числа, которые делятся на 10
// 1. створити масив з 20 случайних чисел від 1 до 100
//   -
//   2. Перебрати чсисла циклом for
//   3. Запіхнути в масив необхідін цифри
// newFunction();
// function newFunction() {
//   const array = [];

//   for (let i = 1; i <= 20; i += 1) {
//     const numbers = parseInt(Math.random() * ((100 - 1) + 1));
//     array.push(numbers);
//   }

//   console.log(array);

//   // for (const number of array) {
//   //   if (number % 2 === 0) {
//   //     console.log(number);
//   //   }
//   // }
//   for (const number of array) {
//     if (number % 3 === 0) {
//       console.log(number);
//     }
//   }
// }
