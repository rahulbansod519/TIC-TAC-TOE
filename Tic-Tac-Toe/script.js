console.log("Welcome");
let turn = "X"
const changeturn = () => {

    return turn === "X" ? "0" : "X"
}
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[1]].innerText == boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != "")) {
            count = 0;
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
        }
    })
}
// main logic
let count = 0;
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            count++;
            turn = changeturn();
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            if (count == 9){
                document.getElementsByClassName("info")[0].innerText = "NO WINNER";
            }
            else{
            checkwin();
            }
        }
    });
});
function reset() {
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext')
        boxtext.innerText = ""
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        count = 0;
    })
}