let datepicked = false;
const info = document.querySelector("#info");
const warning2 = document.querySelector("#warning2");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const eleven = document.querySelector("#eleven");
const twelve = document.querySelector("#twelve");
const thirteen = document.querySelector("#thirteen");
const fourteen = document.querySelector("#fourteen");
const fifteen = document.querySelector("#fifteen");
const sixteen = document.querySelector("#sixteen");
const seventeen = document.querySelector("#seventeen");
const eighteen = document.querySelector("#eighteen");
const nineteen = document.querySelector("#nineteen");
const twenty = document.querySelector("#twenty");
const twentyone = document.querySelector("#twentyone");
const twentytwo = document.querySelector("#twentytwo");
const twentythree = document.querySelector("#twentythree");
const twentyfour = document.querySelector("#twentyfour");
const twentyfive = document.querySelector("#twentyfive");
const twentysix = document.querySelector("#twentysix");
const twentyseven = document.querySelector("#twentyseven");
const twentyeight = document.querySelector("#twentyeight");
const twentynine = document.querySelector("#twentynine");
const thirty = document.querySelector("#thirty");

const list = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyone,
  twentytwo,
  twentythree,
  twentyfour,
  twentyfive,
  twentysix,
  twentyseven,
  twentyeight,
  twentynine,
  thirty,
];

function proceed2() {
  if (datepicked == false) {
    warning2.classList.add("warning");
    warning2.innerHTML = "Please select a date";
  } else {
    warning2.innerHTML = "";
    info.innerHTML =
      "It is your lucky day, we have available seats on this date.";
    window.scroll({ top: 1360, behavior: "smooth" });
  }
}

function first() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[0].classList.add("numback");
    datepicked = true;
  }
}

function second() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[1].classList.add("numback");
    datepicked = true;
  }
}

function third() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[2].classList.add("numback");
    datepicked = true;
  }
}

function fourth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[3].classList.add("numback");
    datepicked = true;
  }
}

function fifth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[4].classList.add("numback");
    datepicked = true;
  }
}

function sixth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[5].classList.add("numback");
    datepicked = true;
  }
}

function seventh() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[6].classList.add("numback");
    datepicked = true;
  }
}

function eighth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[7].classList.add("numback");
    datepicked = true;
  }
}

function nineth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[8].classList.add("numback");
  }
}
function tenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[9].classList.add("numback");
    datepicked = true;
  }
}

function eleventh() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[10].classList.add("numback");
    datepicked = true;
  }
}

function twelfth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[11].classList.add("numback");
    datepicked = true;
  }
}

function thirteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[12].classList.add("numback");
    datepicked = true;
  }
}

function fourteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[13].classList.add("numback");
    datepicked = true;
  }
}

function fifteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[14].classList.add("numback");
    datepicked = true;
  }
}

function sixteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[15].classList.add("numback");
    datepicked = true;
  }
}

function seventeenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[16].classList.add("numback");
    datepicked = true;
  }
}

function eighteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[17].classList.add("numback");
    datepicked = true;
  }
}

function nineteenth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[18].classList.add("numback");
    datepicked = true;
  }
}

function twentieth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[19].classList.add("numback");
    datepicked = true;
  }
}

function twentyfirst() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[20].classList.add("numback");
    datepicked = true;
  }
}

function twentysecond() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[21].classList.add("numback");
    datepicked = true;
  }
}

function twentythird() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[22].classList.add("numback");
    datepicked = true;
  }
}

function twentyfourth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[23].classList.add("numback");
    datepicked = true;
  }
}

function twentyfifth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[24].classList.add("numback");
    datepicked = true;
  }
}

function twentysixth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[25].classList.add("numback");
    datepicked = true;
  }
}

function twentyseventh() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[26].classList.add("numback");
    datepicked = true;
  }
}

function twentyeighth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[27].classList.add("numback");
    datepicked = true;
  }
}

function twentynineth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[28].classList.add("numback");
    datepicked = true;
  }
}

function thirtyeth() {
  info.classList.add("colourclass");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("numback");
    list[29].classList.add("numback");
    datepicked = true;
  }
}
