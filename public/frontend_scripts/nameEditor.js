
let name = document.getElementById("name")
let myName = name.innerText
let timeoutID = 0
name.addEventListener('input', function () {
    startDeleteAndWrite();
})

function setCursorPosition(element, index) {
    if (index === 0) {
        return
    }
    var selection = window.getSelection();
    var range = document.createRange();
    range.setStart(element.firstChild, index);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function deleteAndWrite() {
    if (myName !== name.innerText) {
        let count = 0
        for (let i = 0; i < name.innerText.length; i++) {
            if (myName.charAt(i) === name.innerText.charAt(i)) {
                count++
            } else {
                break
            }
        }
        if (count < name.innerText.length) {
            name.innerText = name.innerText.slice(0, name.innerText.length - 1);
            setCursorPosition(name, name.innerText.length)
            timeoutID = setTimeout(deleteAndWrite, getRandomNumber(1,100)); // Adjust the delay here (in milliseconds)
        } else {
            name.innerText = myName.slice(0, name.innerText.length + 1)
            setCursorPosition(name, name.innerText.length)
            timeoutID = setTimeout(deleteAndWrite, getRandomNumber(50,400)); // Adjust the delay here (in milliseconds)
        }
    } else {
        setCursorPosition(name, name.innerText.length)
    }
}

function startDeleteAndWrite() {
    console.log(timeoutID)
    clearTimeout(timeoutID); // Cancel previous call if any
    timeoutID = setTimeout(deleteAndWrite, 1000);
}

