let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "O";
      turn0 = false;
      count++;
      box.classList.add("O");
    } else {
      box.innerText = "X";
      turn0 = true;
      box.classList.add("X");
      count++;
    }
    console.log(count);
    box.disabled = true;
    checkWinner();
    checkDraw();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    count = 0;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    count = 0;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let i = 0; i < winPatterns.length; i++) {
    let pattern = winPatterns[i];
    // console.log(pattern);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner");
        showWinner(pos1Val);
      }
    }
  }
};

const checkDraw = () => {
  if (count === 9) {
    msg.innerText = "Match is draw";
    msgContainer.classList.remove("hide");
  }
};

resetBtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
