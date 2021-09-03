let start_time = 0
let timer_on = false;
let timer_func = null;
let set_timer = null;
let best_score = 0;

let sum = 0;
let count = 0;

let mainContent = document.getElementById('main');

function main() {
    mainContent.firstElementChild.innerText = '';
    if (!timer_on) {
        init();
    }
    else {
        calculateScore();
    }
}

function init(){
    mainContent.style.backgroundColor = '#eb3434';
    timer_on = true;
    let time = Math.random()*4000 + 500;
    timer_func = setTimeout(() => mainContent.style.backgroundColor = '#34eb3a' , time);
    set_timer = setTimeout(setReactionTimer, time);
}

function calculateScore(){
    if (start_time == 0) {
        mainContent.firstElementChild.innerText = 'Too early! Try again.';
    }
    else {
        const reaction_time = (Date.now() - start_time)/1000;
        mainContent.firstElementChild.innerText = reaction_time;
        if (best_score == 0 || reaction_time < best_score) {
            best_score = reaction_time;
            document.getElementById('best_score').innerText  = "Best score: " + reaction_time;
        }
        count++;
        sum += reaction_time;
        document.getElementById('average').innerText  = "Average: " + (sum/count).toFixed(3);

    }
    reset();
}

function setReactionTimer(){
    start_time = Date.now();
}

function reset(){
    clearTimeout(timer_func);
    clearTimeout(set_timer);
    timer_on = false;
    start_time = 0;

}

function reset_best(){
    best_score = 0;
    document.getElementById('best_score').innerText  = "Best score: ";
}

function reset_average(){
    sum = 0;
    count = 0;
    document.getElementById('average').innerText  = "Average: ";
}

mainContent.onmousedown = main;