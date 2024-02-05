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

let person = college[3];

if (person.isStudent) {
    console.log(`Вы выбрали студента ${person.name}`);

    if (person.age >= 18) {
        console.log(`Студент ${person.name} совершеннолетний. Ему ${person.age}`);
    } else {
        console.log(`Студент ${person.name} не совершеннолетний. Ему ${person.age}`);
    }
    if (person.cash >= 4500) {
        console.log(`Студент ${person.name} получает повышенную стипендию. (${person.cash} руб.)`);
    } else if (person.cash <= 4400 || person.cash >= 1) {
        console.log(`Студент ${person.name} получает обычную стипендию. (${person.cash} руб.)`);
    } else if (person.cash === 0) {
        console.log(`Студент ${person.name} не получает стипендию.`);
    }
} else if (!person.isStudent || person.isKurator) {
    console.log(`Вы выбрали преподавателя ${person.name}`);
    console.log(`Преподаватель ${person.name} куратор группы ${person.kuratorGroup}`);
}