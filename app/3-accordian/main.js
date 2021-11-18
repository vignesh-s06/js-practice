 //create event listener for all buttons
 let buttons = document.querySelectorAll('.question-btn');
 
 //buttons.forEach(function(hi){
//  console.log(hi);
// })

function hideAllQuestionText(){
    let questionsText = document.querySelectorAll('.question-text');
    questionsText.forEach(function(questionText){
        // console.log(questionText);
        questionText.style.display = 'none';
    });
}


// printMe('PERI');

// console.log(printMe); //it will send printMe

buttons.forEach(function(button){
    // console.log(button);   //it will execute the item
    button.addEventListener('click',function(){

        //to select the current element
        let currentElement = this,
            toDivElement = currentElement.parentNode.parentNode;
            targetElement = toDivElement.querySelector('.question-text');
        
        console.log(targetElement);

        //hide all displayed element
        hideAllQuestionText();
        
        // open the question element display:block is applied

        targetElement.style.display = 'block';

    })
});