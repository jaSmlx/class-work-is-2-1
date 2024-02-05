// const array = ["Tom","bob",3,4];
// console.log(array[40])

// let person = {
//    name: "Tom",
//    age: 18,
//    hobbies: ["Кушать", "Спать", "Просмотр кино"],
//    contacts: {
//     phone: 88005552332,
//     email: "tom@example.com",
//     social: "www.github.com"
//    }
// }
// console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
// console.log(person["hobbies"][2])
// console.log(person["contacts"]["social"])

let college = [
    {name: "Tom", age: 23, group: "Is-2-2"},
    {name: "bob", age: 15, group: "Is-2-1"},
    {name: "stan", age: 17, group: "Is-3-1"},
    {name: "harry", age: 21, group: "Is-4-1"},
];

let count = 2
let studentAge = college[count]["age"];
let studentName = college[count]["name"];

if ( studentAge >= 18) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`)
} else if ( studentAge < 18) {
    console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`)
}