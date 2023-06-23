// for (let apple = 0; apple < 10; apple += 1) {
//   console.log(apple);
// }

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const add = a => {
//   return a + 5;
// };
// console.log(add);

// const a = 2.4626
// const b = a.toFixed(3);
// console.log(b);

// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function(item){

//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }

//   }
// )
//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// const friends = ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"];
// console.log(friends.length);

// / 5. Исправьте чтобы код работал
// class Car {
//     // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand
//         this.model = model
//         this.price = price
//     }
// }

// const bmw = new Car("nissan", "qsh", '1000')

// console.log(bmw)

// const teamListRef = document.querySelector(".team-list")
// console.log(teamListRef)
// const itemsRef = teamListRef.querySelectorAll('li')
// console.log("itemsRef", itemsRef)
// itemsRef.length
// console.log("itemsRef.length", itemsRef.length)

// const acc = [
// tag:1
// ]
// const key = "tag"
// acc.tag = 1
// acc['tag'] = 1

// acc[key] = 2

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}

// ▶︎Обчислювальні властивості

// const updateObject = (object, removedKey) => {
//     const newObject = {}
//     const keys = Object.keys(object)
//     for (const key of keys) {
//         console.log("key ", key )
//         if (key !== removedKey) {
//             newObject[key] = object[key]
//         }
//     }
// }

// updateObject({ a: 1, b: 2, c: 3 }, 'b')

// console.log(1, 2, 3);
// 4. При помощи цикла for додайте все четные числа от   min до max
// const min=4
// const max=11

// for (let index = 4; index <= 11; index += 1) {
//     if (index % 2 === 0) {
//     console.log(index);
//   }
// }

// 4. За допомогою циклу for додайте усі парні числа від max до min
// const min=4
// const max=11

// let sum = 0;
// for (let index = 11; index >= 4; index -= 1) {
//   if (index % 2 === 0) {
//     sum += index;
//   }
// }

// console.log(sum);

// 11. Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client1 = new Client("1", "1@gmail.com");

// const client2 = new Client("2", "2@gmail.com");
// client2.login = 22;
// console.log(client2.login);

// const allNumbers = numbers.flatMap((number) => number);

// let newArray = [];

// numbers1.map((element, index1, array) => {});

// numbers2.map((element, index2, array) => {
//   // Тіло колбек-функції
// });

// const uniqueNumbers = allNumbers.filter(
//   (number, index, array) => array.indexOf(number) === index
// );

// // console.log(uniqueNumbers);

// let numbers1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// let commonElements = numbers1.filter((element) => numbers2.includes(element));

// console.log(commonElements);

// // Завдання1: Повернути список з унікальних елементів
///Завдання 2: Повернути список спільних елементів

// const numbers1 = [1, 1, 2, 3, 5, 5, 8, 13, 21, 34, 55, 89];
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const uniqueNumbers = new Set([...numbers1, ...numbers2]);
// console.log(uniqueNumbers);

// 11. Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(email, login) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new Client("aa@jf.com", 123);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array[5]);

// for (let index = 1; index <= 10; index++) {
//   if (index === 5) {
//     console.log("five");
//   } else console.log(index);
// }

// const array = [1, 2, 3];

// console.log(array.map());

// const array = [1, 2, 3];
// console.log(array);

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
search.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  const { query, days } = event.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch((error) => console.log(error));
}

function getWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "9cd62f23e5a64369ba4110323232306";

  return fetch(
    `${BASE_URL}/forecast.json${API_KEY}&q=${city}&days=${days}`
  ).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(array) {
  return array
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
        <img src="${icon}" alt="${text}" />
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
      </li>`
    )
    .join("");
}

// setInterval(() => {

// }, 3000);

// http://api.weatherapi.com/v1/forecast.json?key=8c99500dc0be4d30a8b173431231606&q=Paris&days=5
