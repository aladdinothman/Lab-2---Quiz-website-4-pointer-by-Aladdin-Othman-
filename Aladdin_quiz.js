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
    question6: 'Swedish',
    question7: 'IKEA',
    question8: '10.million',
    question9: '349'
};

const firstName= document.getElementById('firstName').value.trim();
if(!/^[a-zA-Z]+$/.test(firstName)) {
    document.getElementById('firstNameError').textContent='First name must contain only letters.';
    document.getElementById('firstNameError').style.display='block';
    isValid=false;
}

const lasttName= document.getElementById('lastName').value.trim();
if(!/^[a-zA-Z]+$/.test(lastnName)) {
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

