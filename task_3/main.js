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
    {
        name: "harry",
        age: 18,
        group: "Is-2-1",
        studId: 321232,
        task: ['Физра', "Мдк-02-02", "Мдк-04-01"],
        typeLearning: "Очная",
        cash: 5500,
        isStudent: true
    },
    {
    name: "ron",
    age: 19,
    group: "Is-3-1",
    studId: 321232,
    task: ['Изо', "обж", "право"],
    typeLearning: "Заочная",
    cash: 0,
    isStudent: true
    },
    {
        name: "tom",
        age: 32,
        isKurator: true,
        kafedra: "Инф. технологии",
        predmet: ["мдк-04-01", 'Изо', "обж", "право"],
        kuratorGroup: "Is-3-1",
        isStudent: false,
    },
    {
        name: "bob",
        age: 32,
        isKurator: true,
        kafedra: "Инф. технологии",
        predmet: ["мдк-04-01", 'Изо', "обж", "право"],
        kuratorGroup: "Is-1-1",
        isStudent: false,
    },
];

if ( college[0]["isStudent"] === true ) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if ( college[0]["age"] >= 18 ) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний. Ему ${college[0]["age"]}`);
    } else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний. Ему ${college[0]["age"]}`);
    }
    if (college[0]["cash"] >= 4500 ) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию. (${college[0]["cash"]} руб.)`);
    } else if ( college[0]["cash"] <= 4400 || college[0]["cash"] >= 1) {
        console.log(`Студент ${college[0]["name"]} получает обычную стипендию. (${college[0]["cash"]} руб.)`);
    } else if  ( college[0]["cash"] == 0 ) {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
    }
} else if ( college[0]["isStudent"] === false ) {
    console.log("Преподаватель")
}