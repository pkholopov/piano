//блок, в котором расположены все клавиши
const piano = document.querySelector('.piano');

//блок, в котором расположены теги <audio>
//сделал так, чтобы загрузить все звуки при загрузке страницы
const soundBox = document.querySelector('.sounds');

//Объект, на основе которого формируется клавиатура
//Ключи - это code клавиш на клавиатуре компьютера (event.code)
//Значения - массивы:
// ['название ноты','путь до файла с нотой','подсказка для клавиши']

//Можно закомментировать часть объекта с конца.
//Пианино выведется в обрезанном виде. Но в рабочем состоянии
const keysAndNotes = {
    'KeyQ':['C4','sounds/01-C4.ogg','Q'],
    'Digit2':['C4sharp','sounds/02-C4sharp.ogg','2'],
    'KeyW':['D4','sounds/03-D4.ogg','W'],
    'Digit3':['D4sharp','sounds/04-D4sharp.ogg','3'],
    'KeyE':['E4','sounds/05-E4.ogg','E'],
    'KeyR':['F4','sounds/06-F4.ogg','R'],
    'Digit5':['F4sharp','sounds/07-F4sharp.ogg','5'],
    'KeyT':['G4','sounds/08-G4.ogg','T'],
    'Digit6':['G4sharp','sounds/09-G4sharp.ogg','6'],
    'KeyY':['A4','sounds/10-A4.ogg','Y'],
    'Digit7':['A4sharp','sounds/11-A4sharp.ogg','7'],
    'KeyU':['B4','sounds/12-B4.ogg','U'],
    'KeyZ':['C5','sounds/13-C5.ogg','Z'],
    'KeyS':['C5sharp','sounds/14-C5sharp.ogg','S'],
    'KeyX':['D5','sounds/15-D5.ogg','X'],
    'KeyD':['D5sharp', 'sounds/16-D5sharp.ogg','D'],
    'KeyC':['E5','sounds/17-E5.ogg','C'],
    'KeyV':['F5','sounds/18-F5.ogg','V'],
    'KeyG':['F5sharp','sounds/19-F5sharp.ogg','G'],
    'KeyB':['G5','sounds/20-G5.ogg','B'],
    'KeyH':['G5sharp','sounds/21-G5sharp.ogg','H'],
    'KeyN':['A5','sounds/22-A5.ogg','N'],
    'KeyJ':['A5sharp','sounds/23-A5sharp.ogg','J'],
    'KeyM':['B5','sounds/24-B5.ogg','M']
};

let i = 1; //счётчик. Нужен для позиционирования диезов
for (let key in keysAndNotes){ //перебор объекта по ключам
    let newSound = soundBox.appendChild(document.createElement('audio')); //добавляю теги аудио
    newSound.setAttribute('note', keysAndNotes[key][0]); //ввёл атрибут note, так как такие id уже есть у клавиш
    newSound.setAttribute('src', keysAndNotes[key][1]);
    let newKey = document.createElement('div'); //добавляю клавиши
    newKey.setAttribute('id', keysAndNotes[key][0]);
    piano.appendChild(newKey).classList.add('key');
    let hint = piano.lastChild.appendChild(document.createElement('span')); //добавляю подсказки
    hint.classList.add('hint');
    hint.innerText = keysAndNotes[key][2];
    if (keysAndNotes[key][0].indexOf('sharp') !== -1){ //условие для диезов. Добавляем специальный класс
        piano.lastChild.classList.add('sharp');
        if(!(i % 7) || !(i % 15)) {  // магия
            i++;                     //увеличиваю счётчик вне очереди (часть магии)
        }
        piano.lastChild.style.left = ((60 * i/2) - 15) + 'px'; //с помощью магии расставляю диезы
    }
    i++;
}

window.addEventListener('keydown', (e)=>{
    if (!keysAndNotes[e.code]) return;  //если не находим в объекте запись по ключу code, выходим из функции
    if (!e.repeat){                     //проверяем, что это первое нажатие клавиши на клавиатуре
        const sound = document.querySelector('audio[note="' + keysAndNotes[e.code][0] + '"]'); //выбираем нужный элемент audio
        sound.currentTime = 0;          // устанавливаем звук на начало
        sound.play();
        let pressedKeyId = keysAndNotes[e.code][0];
        document.querySelector('#' + pressedKeyId).classList.add('keyPressed'); //добавляем класс нажатой кнопки
    }
});
window.addEventListener('keyup', (e)=>{
    if (!keysAndNotes[e.code]) return;
    //далее ставим звук на паузу. Если это убрать,
    //звук будет звучать даже если отпустить клавишу.
    //Можно сделать отдельным чекбоксом фишку с переключением.
    //Типа, имитация педали
    document.querySelector('audio[note="' + keysAndNotes[e.code][0] + '"]').pause();
    pressedKeyId = keysAndNotes[e.code][0];
    document.querySelector('#' + pressedKeyId).classList.remove('keyPressed'); //убираем класс нажатой клавиши
});

//заставляем звучать пианино по щелчку
window.addEventListener('mousedown', (e)=>{
    if (!e.target.getAttribute('id')) return;
    document.querySelector('audio[note="' + e.target.getAttribute('id') + '"]').currentTime = 0;
    document.querySelector('audio[note="' + e.target.getAttribute('id') + '"]').play();
    e.target.classList.add('keyPressed');
});
window.addEventListener('mouseup', (e)=>{
    if (!e.target.getAttribute('id')) return;
    document.querySelector('audio[note="' + e.target.getAttribute('id') + '"]').pause();
    e.target.classList.remove('keyPressed');
});
