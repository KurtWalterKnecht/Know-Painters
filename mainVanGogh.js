

const fill = document.querySelector('.fill');
//selects all empty classes and places inside node list inside empties variable
const empties = document.querySelectorAll('.empty');


// Fill Listeners
// create variable to register actions

var dragged;


//starryNight listeners

starryNight.addEventListener('dragstart', dragStartStarryNight);
starryNight.addEventListener('dragend', dragEndStarryNight);

starryNightTitle.addEventListener('dragover', dragOver);
starryNightTitle.addEventListener('dragenter', dragEnter);
starryNightTitle.addEventListener('dragleave', dragLeave);
starryNightTitle.addEventListener('drop', dragDropStarryNight);

// nightCafe listeners

nightCafe.addEventListener('dragstart', dragStartNightCafe);
nightCafe.addEventListener('dragend', dragEndNightCafe);

nightCafeTitle.addEventListener('dragover', dragOver);
nightCafeTitle.addEventListener('dragenter', dragEnter);
nightCafeTitle.addEventListener('dragleave', dragLeave);
nightCafeTitle.addEventListener('drop', dragDropNightCafe);


//wheatField listeners
wheatField.addEventListener('dragstart', dragStartWheatField);
wheatField.addEventListener('dragend', dragEndWheatField);

wheatFieldTitle.addEventListener('dragover', dragOver);
wheatFieldTitle.addEventListener('dragenter', dragEnter);
wheatFieldTitle.addEventListener('dragleave', dragLeave);
wheatFieldTitle.addEventListener('drop', dragDropWheatField);


//irises listeners
irises.addEventListener('dragstart', dragStartIrises);
irises.addEventListener('dragend', dragEndIrises);

irisesTitle.addEventListener('dragover', dragOver);
irisesTitle.addEventListener('dragenter', dragEnter);
irisesTitle.addEventListener('dragleave', dragLeave);
irisesTitle.addEventListener('drop', dragDropIrises);


//bandagedEar listeners
bandagedEar.addEventListener('dragstart', dragStartBandagedEar);
bandagedEar.addEventListener('dragend', dragEndBandagedEar);

bandagedEarTitle.addEventListener('dragover', dragOver);
bandagedEarTitle.addEventListener('dragenter', dragEnter);
bandagedEarTitle.addEventListener('dragleave', dragLeave);
bandagedEarTitle.addEventListener('drop', dragDropBandagedEar);




/*
// loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


 */

// Drag Functions
//appending the hold class

//generic functions

/*
function dragStart() {
    console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}
*/


function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}


// specific functions

//Starry Night Functions for starting and dropping
function dragStartStarryNight() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndStarryNight() {
    console.log('end');
    this.className = 'starryNight';
}

function dragDropStarryNight(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == starryNight)
        this.append(starryNight);
}

// Night Cafe functions---------
function dragStartNightCafe() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndNightCafe() {
    console.log('end');
    this.className = 'nightCafe';
}


function dragDropNightCafe(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == nightCafe)
        this.append(nightCafe);
}


// WheatField functions

function dragStartWheatField() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndWheatField() {
    console.log('end');
    this.className = 'wheatField';
}
function dragDropWheatField(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == wheatField)
        this.append(wheatField);
}


// irises functions


function dragStartIrises() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndIrises() {
    console.log('end');
    this.className = 'irises';
}

function dragDropIrises(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == irises)
        this.append(irises);
}


// bandagedEar functions

function dragStartBandagedEar() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndBandagedEar() {
    console.log('end');
    this.className = 'bandagedEar';
}

function dragDropBandagedEar(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == bandagedEar)
        this.append(bandagedEar);
}

