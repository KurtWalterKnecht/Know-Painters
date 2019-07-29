
const fill = document.querySelector('.fill');
//selects all empty classes and places inside node list inside empties variable
const empties = document.querySelectorAll('.empty');

// Fill Listeners
// create variable to register actions

/*
var dragged2;
*/

//munch paintings


var dragged;


//vampire
vampire.addEventListener('dragstart', dragStartvampire);
vampire.addEventListener('dragend', dragEndvampire);

vampireTitle.addEventListener('dragover', dragOver);
vampireTitle.addEventListener('dragenter', dragEnter);
vampireTitle.addEventListener('dragleave', dragLeave);
vampireTitle.addEventListener('drop', dragDropvampire);

//puberty
puberty.addEventListener('dragstart', dragStartpuberty);
puberty.addEventListener('dragend', dragEndpuberty);

pubertyTitle.addEventListener('dragover', dragOver);
pubertyTitle.addEventListener('dragenter', dragEnter);
pubertyTitle.addEventListener('dragleave', dragLeave);
pubertyTitle.addEventListener('drop', dragDroppuberty);

//munchselfportrait
munchselfportrait.addEventListener('dragstart', dragStartmunchselfportrait);
munchselfportrait.addEventListener('dragend', dragEndmunchselfportrait);

munchselfportraitTitle.addEventListener('dragover', dragOver);
munchselfportraitTitle.addEventListener('dragenter', dragEnter);
munchselfportraitTitle.addEventListener('dragleave', dragLeave);
munchselfportraitTitle.addEventListener('drop', dragDropmunchselfportrait);

//scream

scream.addEventListener('dragstart', dragStartscream);
scream.addEventListener('dragend', dragEndscream);

screamTitle.addEventListener('dragover', dragOver);
screamTitle.addEventListener('dragenter', dragEnter);
screamTitle.addEventListener('dragleave', dragLeave);
screamTitle.addEventListener('drop', dragDropscream);

//The Dance of Life

dance.addEventListener('dragstart', dragStartdance);
dance.addEventListener('dragend', dragEnddance);

danceTitle.addEventListener('dragover', dragOver);
danceTitle.addEventListener('dragenter', dragEnter);
danceTitle.addEventListener('dragleave', dragLeave);
danceTitle.addEventListener('drop', dragDropdance);



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






// puberty functions

function dragStartpuberty() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndpuberty() {
    console.log('end');
    this.className = 'puberty';
}

function dragDroppuberty(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == puberty)
        this.append(puberty);
}


// vampire functions

function dragStartvampire() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndvampire() {
    console.log('end');
    this.className = 'vampire';
}

function dragDropvampire(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == vampire)
        this.append(vampire);
}

// munchselfportrait functions

function dragStartmunchselfportrait() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndmunchselfportrait() {
    console.log('end');
    this.className = 'munchselfportrait';
}

function dragDropmunchselfportrait(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == munchselfportrait)
        this.append(munchselfportrait);
}

// scream functions

function dragStartscream() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEndscream() {
    console.log('end');
    this.className = 'scream';
}

function dragDropscream(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == scream)
        this.append(scream);
}

// The Dance of Life functions

function dragStartdance() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnddance() {
    console.log('end');
    this.className = 'dance';
}

function dragDropdance(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == dance)
        this.append(dance);
}
