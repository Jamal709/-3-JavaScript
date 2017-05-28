


    function genPass(){
    var numChars = parseInt(document.getElementsByName('numChars')[0].value);
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678!@#$%()*-+,.?';
    var pass = '';
    numChars = numChars < 4 ? 4 : numChars;
    for (var i = 0; i < numChars; i++){
        pass += abc[rand(abc.length)];
    }
    document.getElementsByName('pass')[0].value = pass;
}

function rand(max) {
    return Math.floor(Math.random() * (max));
}


function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1; //номер игрока, который сейчас ходит

    while (true) {
        var userAnswer = prompt('Ходит игрок ' + playerNum + '. Введите число от 0 до 100. Для выхода нажмите q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваш ответ слишком большой');
        } else if (userAnswer < answer) {
            alert('Ваш ответ слишком маленький');
        } else if (userAnswer == answer) {
            alert('Вы угадали! Выиграл игрок: ' + playerNum);
            break;
        } else {
            alert('Необходимо ввести число!');
        }

        //делаем смену игрока
        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }
    }
}



//натуральные числа
function naturalNumber() {
    var num = parseFloat(document.getElementsByName('num')[0].value);
    if (num > 0) {
        if (isInt(num)) {
            if (isSimpleNum(num)) {
                document.getElementsByName('result_2')[0].innerHTML = 'Это простое натуральное число';
            } else {
                document.getElementsByName('result_2')[0].innerHTML = 'Это натуральное число не является простым';
            }
        } else {
            document.getElementsByName('result_2')[0].innerHTML = 'Это не натуральное число';
        }
    } else {
        document.getElementsByName('result_2')[0].innerHTML = 'Это не натуральное число';
    }
}
//целое ли число
function isInt(num) {
    return num % 1 == 0;
}
//простое ли число
function isSimpleNum(num) {
    var result;
    if (num == 1) {
        result = false;
    }else if (num == 2) {
        result = true;
    } else {
        result = true;
        for (var i = 2; i <= num/2; i++){
            if (num % i == 0) {
                result = false;
            }
        }
    }
    return result;
}