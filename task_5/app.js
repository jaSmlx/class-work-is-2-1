/// let sum = (a=2, b=3, c=3, d=4) => {
/// let res1 = a * b;
///   let res2 = c * d;
///   let result = res1 + res2
/// console.log(result);
/// }
///
/// sum(12, 16, 17, 20);

// let person = (array) => {
//    console.log(array[0])
// }
//
// const tom = ['Tom', 42, 'tom@example.com'];
// const bob = ['bob', 32, 'bob@example.com'];
//
// person(tom);
// person(bob);

// let person = (object) => {
//     console.log(object['name']);
//    console.log(object['age']);
// }
//
// let tom = { name: 'tom', age: 42, email: 'tom@example.com'};
//
// person(tom);

let temp = (e) => {
    if (e === undefined) {
        console.log(`Укажите температуру`)
    } else {
    if ( e >= 25 ) {
        console.log(`Cегодня ${e} градусов. Можно надеть футболку`);
        }
    }
}

let key = prompt('Введите температуру');
temp(key);