// const students = ['Tom', 'bob', 'Herry']
// for (let i = 0; i < students.length; i++) {
//     let result = students[i];
//     console.log(result);
// }

let people = [ ['tom', 18], ['bob', 17], ['harry', 17] ];

for  (let i = 0; i < people.length; i++) {
    for (let j = 0; i < people.length; j++) {
        let result = people [i][j];
        console.log(result);
    }
    console.log('-------------')
}