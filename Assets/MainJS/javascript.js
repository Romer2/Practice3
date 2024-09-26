'use strict';

// 1 task

    let a = prompt("Стоимость");
    let b = prompt("Количество денег");

    if( a == b) {
        alert("Оплата совершена");
    }else if ( a != Number(a) && b != Number(b)) {
        alert('Введите числа')
    } else if (a > b) {
        alert(`У вас не хватает ${a - b}`)
    }  else if (a < b) {
        alert(`Сдача ${b - a}`)
    }else if (a && b < 0) {
        alert(`Это отрицательное число`)
    } 

//  2 task  

    let c = prompt('Введите число');

    if ( c == Number(c) && c > 0){
        alert('1');
    }
         else if( c == Number(c) && c == 0){
                alert('0');
        } else if( c == Number(c) && c < 0){
                alert('-1');
        }
     else {
        alert('Введите число')
    }

// 3 task

    let e = 1;
    let r = 2;
    let result = (e + r < 4) ? 'Мало' : 'Много';
    alert(result);

// 4 task 

    let login = prompt('Введите вашу должность', 'Директор');
    let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
    alert(message); 

//  5 task

    let log = prompt("напишите свой логин");

    if( log == 'Админ'){
        let pwd = prompt('Введите пароль');
        if(pwd == 'Я Главный'){
            alert('Здравствуйте');
        } else if( log == ' '){
            alert('Отменено');
        } else {
            alert('Я вас не знаю');
        }
    } else if( log == ' '){
        alert('Отменено');
    }
     else {
        alert('Я вас не знаю');
    }