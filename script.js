var questions = ["How many legs does a cat have?","What is the sum of 5 and 3?","How many days are in a week?","If you have 10 candies and eat 3, how many candies do you have left?","What is the number that comes after 9?"];
var correctAnswers = [4,8,7,7,10];
var userAnswers = [];

alert("Simple Quiz! You have to answer 5 simple questions");
for(i=0;i<5;i++){
    var userInput = Number(prompt(`Question ${i+1} of 5 is: \n${questions[i]}`));
    if(userInput === correctAnswers[i]){
        userAnswers.push(userInput);

    }
}

if(userAnswers.lenth === 3){
    alert(`Wow! You have cleared the Quiz with "C" Grade \n \nYou have answered ${userAnswers.length} questions correctly`)
}
else if(userAnswers.length === 4){
    alert(`Wow! You have cleared the Quiz with "B" Grade \n \nYou have answered ${userAnswers.length} questions correctly`)
}
else if(userAnswers.length === 5){
    alert(`Wow! You have cleared the Quiz with "A" Grade \n \nYou have answered ${userAnswers.length} questions correctly`)
}
else{
    alert(`Sorry! You haven't cleared the Quiz  \n \nYou have answered only ${userAnswers.length} questions correctly`)
}