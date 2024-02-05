// let students = ["Андрей", "Иван", "Стас"];
// students[2] = false
// console.log(students)

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// college[1][1] = 112
// let kab = college[1][1]
// condole.log(college);

let number = [[1,2,3], [1,2]];

const coutLength = 2;
const arrayLength = number.length;

if (number.length === coutLength) {
console.log('ok');
} else if (number.length < coutLength) {
    console.log (`Длина вашего массива: ${number.length}. Длинну нужно увеличить до ${coutLength}. Прибавьте к массиву значение ${result}`);
} else if ( number.length > coutLength) {
    result = number.length - coutLength;
    console.log (`Длина вашего массива: ${number.length}. Длинну нужно уменьшить до ${coutLength}. Удалите из массива значение ${result}`);
}
