const fill = document.querySelector('.fill');
//selects all empty classes and places inside node list inside empties variable
const empties = document.querySelectorAll('.empty');

// Fill Listeners
// create variable to register actions




var dragged;


//Picasso paintings

// listeners for guernica
guernica.addEventListener('dragstart', dragStartguernica);
guernica.addEventListener('dragend', dragEndguernica);

guernicaTitle.addEventListener('dragover', dragOver);
guernicaTitle.addEventListener('dragenter', dragEnter);
guernicaTitle.addEventListener('dragleave', dragLeave);
guernicaTitle.addEventListener('drop', dragDropguernica);


//listeners for Girl Before a mirror

mirrorgirl.addEventListener('dragstart', dragStartmirrorgirl);
mirrorgirl.addEventListener('dragend', dragEndmirrorgirl);

mirrorgirlTitle.addEventListener('dragover', dragOver);
mirrorgirlTitle.addEventListener('dragenter', dragEnter);
mirrorgirlTitle.addEventListener('dragleave', dragLeave);
mirrorgirlTitle.addEventListener('drop', dragDropmirrorgirl);

// listeners for The Old Guitarist

guitarist.addEventListener('dragstart', dragStartguitarist);
guitarist.addEventListener('dragend', dragEndguitarist);

guitaristTitle.addEventListener('dragover', dragOver);
guitaristTitle.addEventListener('dragenter', dragEnter);
guitaristTitle.addEventListener('dragleave', dragLeave);
guitaristTitle.addEventListener('drop', dragDropguitarist);


// listeners for The Tragedy

tragedy.addEventListener('dragstart', dragStarttragedy);
tragedy.addEventListener('dragend', dragEndtragedy);

tragedyTitle.addEventListener('dragover', dragOver);
tragedyTitle.addEventListener('dragenter', dragEnter);
tragedyTitle.addEventListener('dragleave', dragLeave);
tragedyTitle.addEventListener('drop', dragDroptragedy);


// listeners for The Weeping Woman

weepingwoman.addEventListener('dragstart', dragStartweepingwoman);
weepingwoman.addEventListener('dragend', dragEndweepingwoman);

weepingwomanTitle.addEventListener('dragover', dragOver);
weepingwomanTitle.addEventListener('dragenter', dragEnter);
weepingwomanTitle.addEventListener('dragleave', dragLeave);
weepingwomanTitle.addEventListener('drop', dragDropweepingwoman);


// generica functions
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


//guernica functions for starting and dropping
function dragStartguernica() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}


function dragEndguernica() {
    console.log('end');
    this.className = 'guernica';
}




function dragDropguernica(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == guernica)
        this.append(guernica);
}

// Girl Before a Mirror

function dragStartmirrorgirl() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}


function dragEndmirrorgirl() {
    console.log('end');
    this.className = 'mirrorgirl';
}



function dragDropmirrorgirl(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == mirrorgirl)
        this.append(mirrorgirl);
}


// The Old Guitarist

function dragStartguitarist() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}


function dragEndguitarist() {
    console.log('end');
    this.className = 'guitarist';
}



function dragDropguitarist(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == guitarist)
        this.append(guitarist);
}

// The Tragedy

function dragStarttragedy() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}


function dragEndtragedy() {
    console.log('end');
    this.className = 'tragedy';
}



function dragDroptragedy(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == tragedy)
        this.append(tragedy);
}


// The Weeping Woman

function dragStartweepingwoman() {
    console.log('start');
    dragged=event.target;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}


function dragEndweepingwoman() {
    console.log('end');
    this.className = 'weepingwoman';
}



function dragDropweepingwoman(e) {
    //this.className = 'empty';
    e.preventDefault();
    if(dragged == weepingwoman)
        this.append(weepingwoman);
}

