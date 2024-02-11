/*All Comments

Getting the DOM elements

Function that updates the current step and updates the DOM

Loop through circles and add/remove "active" class based on their index and current step

 Checking and disabling prev and next buttons

 Update progress bar width based on current step

Add Click event listeners to all buttons
*/


//Getting the DOM elements

const circles = document.querySelectorAll('.circle');
const buttons = document.querySelectorAll('button');
const progressBar = document.querySelector('.indicator');

// console.log(circles,buttons, progressBar);

let currentStep = 1;


const updateSteps = (e) =>{

    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
    // console.log(currentStep);

 
 //Loop through circles and add/remove "active" class based on their index and current step

    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? 'add' : 'remove'}`]('active');
        
        if(currentStep === circles.length){
            buttons[1].disabled = true;
        } else if (currentStep === 1){
            buttons[0].disabled = true;
        } else{
            buttons.forEach(button =>{
                button.disabled = false;
            })
        }
    })

 // Update progress bar width based on current step

    progressBar.style.width = `${(currentStep -1) /(circles.length - 1) * 100}%`


}




//Add Click event listeners to all buttons
buttons.forEach( button =>{
button.addEventListener('click', updateSteps);
})










