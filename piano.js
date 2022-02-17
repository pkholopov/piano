const piano = document.querySelector('.piano');

const notes = {
    'C4':'sounds/01-C4.ogg',
    'C4sharp':'sounds/02-C4#.ogg',
    'D4':'sounds/03-D4.ogg',
    'D4sharp':'sounds/04-D4#.ogg',
    'E4':'sounds/05-E4.ogg',
    'F4':'sounds/06-F4.ogg',
    'F4sharp':'sounds/07-F4#.ogg',
    'G4':'sounds/08-G4.ogg',
    'G4sharp':'sounds/09-G4#.ogg',
    'A4':'sounds/10-A4.ogg',
    'A4sharp':'sounds/11-A4#.ogg',
    'B4':'sounds/12-B4.ogg',
    'C5':'sounds/13-C5.ogg',
    'C5sharp':'sounds/14-C5#.ogg',
    'D5':'sounds/15-D5.ogg',
    'D5sharp': 'sounds/16-D5#.ogg',
    'E5':'sounds/17-E5.ogg',
    'F5':'sounds/18-F5.ogg',
    'F5sharp':'sounds/19-F5#.ogg',
    'G5':'sounds/20-G5.ogg',
    'G5sharp':'sounds/21-G5#.ogg',
    'A5':'sounds/22-A5.ogg',
    'A5sharp':'sounds/23-A5#.ogg',
    'B5':'sounds/24-B5.ogg'
};
console.log(notes['C4sharp']);
let i = 1;
for (let note in notes){
    //console.log(note.indexOf('sharp'));
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', note);
    piano.appendChild(newDiv).classList.add('keys');
    if (note.indexOf('sharp') !== -1){
        piano.lastChild.classList.add('sharp');
        if(!(i % 7) || !(i % 15)) {
            i++;
        }
        piano.lastChild.style.left = ((60 * i/2) - 15) + 'px';
    }
    i++;
}
