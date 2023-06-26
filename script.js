// console.log(1 == 1);
// console.log(1 == 2);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 === 1);





// console.log(4 > 3);
// console.log(4 > 4);
// console.log(4 >= 4);
// console.log(4 >= 5);
// console.log(4 > 3);
// var a = 3
// var b = 4
// console.log(a < b);
// if (1 == 2) {
//     console.log('салам папалам');
// }
// var hello = prompt ('введите привет')
// if (hello == 'привет') {
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// var num = + prompt('Введите цыфру 3')
// if (num == 3) {
//     console.log('значение равно 3');
// }else if(num > 3){
//     console.log('значение больше 3');
// }
// else if(num < 3){
//     console.log('значение меньше 3');
// }else{
//     console.log('ошибка попробуйте снова нажмите на F5');
// }
// if (true && true) {
//     console.log(true);
// }else{
//     console.log(false);
// } ||



// }else if (str == 'hello') {
//     alert('hello')
// }
    // console.log(isNaN('sdasdas'));
    // console.log(isNaN(324234));
    // console.log(!isNaN(324234));

    
   
    var a = + prompt('Ведите первое число')
    var b = + prompt('Ведите второе число')
    if (a > b && !isNaN (a)&& !isNaN(b)) {
        console.log(a + ' болбше ' + b);
    }else if (a > b && !isNaN (a)&& !isNaN(b)) {
        console.log(a + ' меньше ' + b);
    }else if (a == b && !isNaN (a)&& !isNaN(b)) {
        console.log(a + ' равно ' + b);
    }else{
        if (isNaN(a)&& isNaN(b))  {
            console.log('значение не число');
        }else if (isNaN(a)) {
            console.log('первое значение не число');
        }else if (isNaN(b)) {
            console.log('второе значение не число');
        }
    }
    alert('нажмите на F12')