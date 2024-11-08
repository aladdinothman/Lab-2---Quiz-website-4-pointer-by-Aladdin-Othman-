document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(function(el) {
        el.style.display= 'none';
});

let isValid= true;
let score= 0;
let correctAnswers= {
    question1: 'Stockholm',
    question2: ['Uppsala', 'Ystad'],
    question4: '1995',
    question5: 'Meatballs', 
    question6: 'Swedish',
    question7: 'IKEA',
    question8: '10.Million',
    question9: '349'
};

const firstName= document.getElementById('firstName').value.trim();
if(!/^[a-zA-Z]+$/.test(firstName)) {
    document.getElementById('firstNameError').textContent='First name must contain only letters.';
    document.getElementById('firstNameError').style.display='block';
    isValid=false;
}

const lastName= document.getElementById('lastName').value.trim();
if(!/^[a-zA-Z]+$/.test(lastName)) {
    document.getElementById('lastNameError').textContent='Last name must contain only letters.';
    document.getElementById('lastNameError').style.display='block';
    isValid=false;
}

const email= document.getElementById('email').value.trim();
if(!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').textContent='Enter a valid email adress.';
    document.getElementById('emailError').style.display='block';
    isValid=false;
}

if (!isValid) {
    return;
}

const question1Answer= document.querySelector('input[name="question1"]:checked'); 
if (question1Answer && question1Answer.value === correctAnswers.question1) {
    score++;
}

const selectedCities=
Array.from(document.querySelectorAll('input[name="question2"]:checked')).map(el => el.value);
if (arraysEqual(selectedCities, correctAnswers.question2)) {
    score++;
}

const question4Answer= document.querySelector('input[name="question4"]:checked'); 
if (question4Answer && question4Answer.value === correctAnswers.question4) {
    score++;
}

const question5Answer= document.getElementById('question5').value;
if (question5Answer === correctAnswers.question5) {
    score++;
}

const question6Answer= document.querySelector('input[name="question6"]:checked'); 
if (question6Answer && question6Answer.value === correctAnswers.question6) {
    score++;
}

const question7Answer=document.querySelector('input[name="question7"]:checked');
if (question7Answer && question7Answer.value === correctAnswers.question7) {
    score++;
}

const question8Answer= document.querySelector('input[name="question8"]:checked');
if (question8Answer && question8Answer.value === correctAnswers.question8) {
    score++; 
}

const question9Answer=document.querySelector('input[name="question9"]:checked'); 
if (question9Answer && question9Answer.value === correctAnswers.question9) {
    score++;
}

document.getElementById('result').innerHTML = `
<div>
<h2>Results of the Quiz</h2>
<p>${firstName} ${lastName}, your score is: ${score}/8</p> 
<p>Correct Answers</p>
<ul>
    <li>1. Capital of Sweden: ${correctAnswers.question1}</li>
    <li>2. Swedish cities: ${correctAnswers.question2.join(', ')}</li>
    <li>4. Sweden joined EU in: ${correctAnswers.question4}</li>
    <li>5. An famous swedish dish: ${correctAnswers.question5} </li>
    <li>6. The official language of Sweden: ${correctAnswers.question6}</li>
    <li>7. Swedish furniture company: ${correctAnswers.question7} </li>
    <li>8. The population of Sweden: ${correctAnswers.question8} </li>
    <li>9. The amount of members that sit in Sweden's parliament: ${correctAnswers.question9} </li>

</ul>
</div>
`;
});

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.sort().every((value,index) => value === arr2.sort()[index]) ;
}
