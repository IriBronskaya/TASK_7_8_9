let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
if (maxValue < minValue) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

////////////////////////////////////больше/////////////////////////////////////////
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            let quotes = [
                `Вы загадали неправильное число!\n\u{1F914}`, 
                `Ой, опять не угадал.\n\u{1F92D}`,
                `Я сдаюсь..\n\u{1F92F}`,
                `Что же это может быть...\n\u{1F47F}`   
              ];
              const answerPhrase = (quotes[phraseRandom]);

              answerField.innerText = answerPhrase;
              gameRun = false;
        } else {
              minValue = answerNumber  + 1;
              answerNumber  = Math.floor((minValue + maxValue) / 2);
              orderNumber++;
              orderNumberField.innerText = orderNumber;
              answerField.innerText = `Вы загадали число ${answerNumber }?`;
            
            }
    }
})

////////////////////////////////////////меньше//////////////////////////////////////
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            let quotes = [
                `Вы загадали неправильное число!\n\u{1F914}`, 
                `Ой, опять не угадал.\n\u{1F92D}`,
                `Я сдаюсь..\n\u{1F92F}`,
                `Что же это может быть...\n\u{1F47F}`   
              ];
              const answerPhrase = (quotes[phraseRandom]);

              answerField.innerText = answerPhrase;
              gameRun = false;
        } else {
              maxValue = answerNumber;
              answerNumber = Math.floor((minValue + maxValue) / 2);
              orderNumber++;
              orderNumberField.innerText = orderNumber;
              answerField.innerText = `Вы загадали число ${answerNumber }?`;     
            }
    }
})

///////////////////////////////Верно!//////////////////////////////////////
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let quotes = [
            `Я всегда угадываю\n\u{1F60E}`, 
            `Да это легко!\n\u{1F600}`,
            `Я сразу понял!\n\u{1F61B}`,
            `Не хвали, я знал!\n\u{1F921}` 
          ];
        var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
        answerField.innerText = q;
        gameRun = false;
    }
})

//////////////////////Заново///////////////////////////////////////////////////////
document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})