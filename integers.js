//натуральные числа
function naturalNumber() {
    var num = parseFloat(document.getElementsByName('num')[0].value);
    if (num > 0) {
        if (isInt(num)) {
            if (isSimpleNum(num)) {
                document.getElementsByName('result')[0].innerHTML = 'Это простое натуральное число';
            } else {
                document.getElementsByName('result')[0].innerHTML = 'Это натуральное число не является простым';
            }
        } else {
            document.getElementsByName('result')[0].innerHTML = 'Это не натуральное число';
        }
    } else {
        document.getElementsByName('result')[0].innerHTML = 'Это не натуральное число';
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