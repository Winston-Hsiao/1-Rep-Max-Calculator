const weightCalc = document.querySelector('.weightCalc');
let weightInput = document.querySelector('#weight');
let repsInput = document.querySelector('#reps');
const msg = document.querySelector('.msg');
const oneRepMax = document.querySelector('.oneRepMax');
// let selectLift = document.querySelector(".select-lift");
// let strLift = selectLift.options[selectLift.selectedIndex].text

weightCalc.addEventListener('submit', onSubmit);

let calcMax = (weight, reps) => {
    return ((weight * reps) * 0.0333) + (weight * 1);
}

function onSubmit(e) {
    e.preventDefault();

    if(weight.value === '' || reps.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter both a weight and # of reps'

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        // let max = math.round(calcMax(weightInput.value, repsInput.value));
        let max = (calcMax(weightInput.value, repsInput.value).toFixed(2));
        oneRepMax.innerHTML = `Your 1 Rep Max is ${max} lbs`;
        // oneRepMax.innerHTML = `Your 1 Rep Max for ${strLift} is ${max} lbs`;
    }
}