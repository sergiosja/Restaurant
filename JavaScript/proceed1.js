const resOne = document.querySelector("#resOne");
const resTwo = document.querySelector("#resTwo");
const resThree = document.querySelector("#resThree");
const resFour = document.querySelector("#resFour");

let blackList = [];
let b = 0;
let w = 0;
let y = 0;

function proceed1() {
  if (resOne.checked || resTwo.checked || resThree.checked || resFour.checked) {
    window.scroll({ top: 600, behavior: "smooth" });
    document.querySelector("#warning").innerHTML = "";
  } else {
    document.querySelector("#warning").classList.add("warning");
    document.querySelector("#warning").innerHTML = "Please select an amount.";
  }

  if (resOne.checked || resTwo.checked) {
    blackList = numlist.slice(0, 12);
    whiteList = numlist.slice(16, 32);
    yellowList = numlist.slice(36, 41);
    for (w = 0; w < whiteList.length; w++) {
      blackList.push(whiteList[w]);
    }

    for (y = 0; y < yellowList.length; y++) {
      blackList.push(yellowList[y]);
    }

    for (b = 0; b < blackList.length; b++) {
      blackList[b].classList.add("blackedChoice");
    }
  }

  if (resThree.checked || resFour.checked) {
    blackList = numlist.slice(12, 16);
    whiteList = numlist.slice(32, 36);
    for (w = 0; w < whiteList.length; w++) {
      blackList.push(whiteList[w]);
    }

    for (b = 0; b < blackList.length; b++) {
      blackList[b].classList.add("blackedChoice");
    }
  }
}
