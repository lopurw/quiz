"use strict";
//==========================================
const $ = document.querySelector.bind(document);

const quiz = $(".quiz");
const warning = $(".warning");
const btnNext = $(".quiz__next-btn");
let count=0;
let userScore=0;

if (typeof questions !== 'undefined' && questions.length >0){
    quiz.classList.remove('hidden');//удаляем hidden,чтобы отображать вопросы
    showQuestions(count);
} else{
    warning.classList.remove('hidden');
}
btnNext.addEventListener('click',nextQuestion);

function showQuestions(index){
    const title = $(".quiz__title");
    const list = $(".quiz__list");
    const total= $(".quiz__total");
    let progress = $(".quiz__progress-inner");

    title.innerHTML = `${questions[index].question}`; //название вопроса
    list.innerHTML='';
    questions[index].options.forEach(item => {
        const text = `<li class="quiz__option">${item}</li>`;
        list.insertAdjacentHTML("beforeend",text) //вставляем в html вопросы и ответы
    });

    const options = list.querySelectorAll(".quiz__option");
    options.forEach(item=>item.setAttribute("onclick", "optionSelected(this)")); //передаю атрибут онклик и вызываю функцию

    total.innerHTML=`${index+1} из ${questions.length}`;//на каком вопросе 
    progress.style.width=`${Math.round(((index+1)/questions.length)* 100)}%`;//прогресс бар(проценты)
}
function optionSelected(answer){
    const userAnswer = answer.textContent;
    const correctAnswer = questions[count].answer;
    const options = document.querySelectorAll(".quiz__option"); // все ответы
    const iconCorrect = "<span>&#10004;</span>";
    const iconIncorrect = "<span>&#9940;</span>";
    
    if(userAnswer==correctAnswer){
        userScore+=1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",iconCorrect);
    } else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",iconIncorrect);

            options.forEach(item=> {
                if(item.textContent==correctAnswer){
                    setTimeout(()=>{
                        item.classList.add("correct");
                        item.insertAdjacentHTML("beforeend",iconCorrect);
                    },100);
                }
            });
    }
        options.forEach(item=>item.classList.add("disabled"));

}
function nextQuestion () {
    const option= $(".quiz__option");
    const result = $(".result");
    const resultText = $(".result__text");
    const resultOzenka = $(".result__ozenka");


    if((count+1)==questions.length && option.classList.contains('disabled')){
        result.classList.remove('hidden');
        quiz.classList.add('hidden');
        resultOzenka.innerHTML=`Оценка: `
        
        // Рассчитываем оценку по десятибальной системе
        const totalQuestions = questions.length;
        const percentageCorrect = (userScore / totalQuestions) * 100;
        let grade = 0;

        if (percentageCorrect >= 95) {
            grade = 10;
        } else if (percentageCorrect >= 85) {
            grade = 9;
        } else if (percentageCorrect >= 75) {
            grade = 8;
        } else if (percentageCorrect >= 65) {
            grade = 7;
        } else if (percentageCorrect >= 55) {
            grade = 6;
        } else if (percentageCorrect >= 45) {
            grade = 5;
        } else if (percentageCorrect >= 35) {
            grade = 4;
        } else if (percentageCorrect >= 25) {
            grade = 3;
        } else if (percentageCorrect >= 15) {
            grade = 2;
        } else {
            grade = 1; 
        }

        resultOzenka.innerHTML=`${grade}`

        resultText.innerHTML=`Количество верных ответов: ${userScore} из ${questions.length}`
        return;
    }

    if (option.classList.contains('disabled')){
        count++;
        showQuestions(count);
    }else{
        alert('Выбери один из вариантов');
    }
}


