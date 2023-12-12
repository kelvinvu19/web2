/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerday = 0;
let numDaysSelected = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearbuttonButton = document.getElementById('clear-button');

const calculatedCostE1 = document.getElementById




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





function onMondayButton(e) {
    e.preventDefault();

    resetAndSetButtonStates();

    setSelectedElement(mondayButton);

    console.log('mon clicked');
}

function onTuesdayButton(e) {
    e.preventDefault();

    resetAndSetButtonStates();

    setSelectedElement(tuesdayButton);

    console.log('tue clicked');
}

function onWednesdayButton(e) {
    e.preventDefault();

    resetAndSetButtonStates();

    setSelectedElement(wednesdayButton);

    console.log('wed clicked');
}

function onThursdayButton(e) {
    e.preventDefault();

    resetAndSetButtonStates();

    setSelectedElement(thursdayButton);

    console.log('clicked');
}

function onFridayButton(e) {
    e.preventDefault();

    resetAndSetButtonStates();

    fridayButton.classList.add('blue-hover-selected');

    console.log('clicked');
}

function onDayOfWeekButtonClicked(event) {
    e.preventDefault();

    const {target} = even;

    resetAndSetButtonStates
}

mondayButton.onclick = onMondayButton;
tuesdayButton.onclick = onTuesdayButton;
wednesdayButton.onclick = onWednesdayButton;
thursdayButton.onclick = onThursdayButton;
fridayButton.onclick = onFridayButton;






/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetAndSetButtonStates(element) {
    mondayButton.classList.remove('blue-hover-selected');
    tuesdayButton.classList.remove('blue-hover-selected');
    wednesdayButton.classList.remove('blue-hover-selected');
    thursdayButton.classList.remove('blue-hover-selected');
    fridayButton.classList.remove('blue-hover-selected');
    fullButton.classList.remove('blue-hover-selected');
    halfButton.classList.remove('blue-hover-selected');
    element.classList.add('blue-hover-selected');
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.onclick = function(e) {
    e.preventDefault();

    costPerday = 20;

    console.log('clicked');
    
    fullButton.classList.remove('blue-hover-selected');
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.onclick = function(e) {
    e.preventDefault();

    costPerday = 35;

    console.log('clicked');

    halfButton.classList.remove('blue-hover-selected');
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    calculatedCostE1.textContent = `$${costPerDay.toFixed(2)}`;
}
