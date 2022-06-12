// Code your solutions in this file
function writeCards(names, gift) {
    let arr = [];
    for (let i=0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
        arr[i] = message
    }
    return arr
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

