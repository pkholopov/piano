const piano = document.querySelector('.piano');

const notes = {
    'C4':'sounds/01-C4.ogg',
    'C4sharp':'sounds/02-C4sharp.ogg',
    'D4':'sounds/03-D4.ogg',
    'D4sharp':'sounds/04-D4sharp.ogg',
    'E4':'sounds/05-E4.ogg',
    'F4':'sounds/06-F4.ogg',
    'F4sharp':'sounds/07-F4sharp.ogg',
    'G4':'sounds/08-G4.ogg',
    'G4sharp':'sounds/09-G4sharp.ogg',
    'A4':'sounds/10-A4.ogg',
    'A4sharp':'sounds/11-A4sharp.ogg',
    'B4':'sounds/12-B4.ogg',
    'C5':'sounds/13-C5.ogg',
    'C5sharp':'sounds/14-C5sharp.ogg',
    'D5':'sounds/15-D5.ogg',
    'D5sharp': 'sounds/16-D5sharp.ogg',
    'E5':'sounds/17-E5.ogg',
    'F5':'sounds/18-F5.ogg',
    'F5sharp':'sounds/19-F5sharp.ogg',
    'G5':'sounds/20-G5.ogg',
    'G5sharp':'sounds/21-G5sharp.ogg',
    'A5':'sounds/22-A5.ogg',
    'A5sharp':'sounds/23-A5sharp.ogg',
    'B5':'sounds/24-B5.ogg'
};
const keys = {
    'q':['C4','sounds/01-C4.ogg'],
    '2':['C4sharp','sounds/02-C4sharp.ogg'],
    'w':['D4','sounds/03-D4.ogg'],
    '3':['D4sharp','sounds/04-D4sharp.ogg'],
    'e':['E4','sounds/05-E4.ogg'],
    'r':['F4','sounds/06-F4.ogg'],
    '5':['F4sharp','sounds/07-F4sharp.ogg'],
    't':['G4','sounds/08-G4.ogg'],
    '6':['G4sharp','sounds/09-G4sharp.ogg'],
    'y':['A4','sounds/10-A4.ogg'],
    '7':['A4sharp','sounds/11-A4sharp.ogg'],
    'u':['B4','sounds/12-B4.ogg'],
    'z':['C5','sounds/13-C5.ogg'],
    's':['C5sharp','sounds/14-C5sharp.ogg'],
    'x':['D5','sounds/15-D5.ogg'],
    'd':['D5sharp', 'sounds/16-D5sharp.ogg'],
    'c':['E5','sounds/17-E5.ogg'],
    'v':['F5','sounds/18-F5.ogg'],
    'g':['F5sharp','sounds/19-F5sharp.ogg'],
    'b':['G5','sounds/20-G5.ogg'],
    'h':['G5sharp','sounds/21-G5sharp.ogg'],
    'n':['A5','sounds/22-A5.ogg'],
    'j':['A5sharp','sounds/23-A5sharp.ogg'],
    'm':['B5','sounds/24-B5.ogg']
}


let i = 1;
for (let note in notes){
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

//Play sounds

window.addEventListener('keydown', (e)=>{
    const sound = document.querySelector('audio');
    let soundSource = keys[e.key][1];
    if (!soundSource){
        return;
    }
    let pressedKeyId = keys[e.key][0]
    document.querySelector('#' + pressedKeyId).classList.add('keysPressed');
    sound.setAttribute('src', soundSource);
    sound.play();
});
window.addEventListener('keyup', (e)=>{
    pressedKeyId = keys[e.key][0]
    document.querySelector('#' + pressedKeyId).classList.remove('keysPressed');
});
