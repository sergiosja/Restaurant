const s1 = document.querySelector("#seat1");
const s2 = document.querySelector("#seat2");
const s3 = document.querySelector("#seat3");
const s4 = document.querySelector("#seat4");
const s5 = document.querySelector("#seat5");
const s6 = document.querySelector("#seat6");
const s7 = document.querySelector("#seat7");
const s8 = document.querySelector("#seat8");
const s9 = document.querySelector("#seat9");
const s10 = document.querySelector("#seat10");
const s11 = document.querySelector("#seat11");
const s12 = document.querySelector("#seat12");
const s13 = document.querySelector("#seat13");
const s14 = document.querySelector("#seat14");
const s15 = document.querySelector("#seat15");
const s16 = document.querySelector("#seat16");
const s17 = document.querySelector("#seat17");
const s18 = document.querySelector("#seat18");
const s19 = document.querySelector("#seat19");
const s20 = document.querySelector("#seat20");
const s21 = document.querySelector("#seat21");
const s22 = document.querySelector("#seat22");
const s23 = document.querySelector("#seat23");
const s24 = document.querySelector("#seat24");
const s25 = document.querySelector("#seat25");
const s26 = document.querySelector("#seat26");
const s27 = document.querySelector("#seat27");
const s28 = document.querySelector("#seat28");
const s29 = document.querySelector("#seat29");
const s30 = document.querySelector("#seat30");
const s31 = document.querySelector("#seat31");
const s32 = document.querySelector("#seat32");
const s33 = document.querySelector("#seat33");
const s34 = document.querySelector("#seat34");
const s35 = document.querySelector("#seat35");
const s36 = document.querySelector("#seat36");
const s37 = document.querySelector("#seat37");
const s38 = document.querySelector("#seat38");
const s39 = document.querySelector("#seat39");
const s40 = document.querySelector("#seat40");

let i = 0;
const numlist = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
  s25,
  s26,
  s27,
  s28,
  s29,
  s30,
  s31,
  s32,
  s33,
  s34,
  s35,
  s36,
  s37,
  s38,
  s39,
  s40,
];

//If 3 or 4 guests are attending
function t1() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    console.log("dette funker");
    s1.classList.add("seatChoice");
    s2.classList.add("seatChoice");
    s3.classList.add("seatChoice");
    s4.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s1.classList.add("seatChoice");
    s2.classList.add("seatChoice");
    s3.classList.add("seatChoice");
  }
}

function t2() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s5.classList.add("seatChoice");
    s6.classList.add("seatChoice");
    s7.classList.add("seatChoice");
    s8.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s5.classList.add("seatChoice");
    s6.classList.add("seatChoice");
    s7.classList.add("seatChoice");
  }
}

function t3() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s9.classList.add("seatChoice");
    s10.classList.add("seatChoice");
    s11.classList.add("seatChoice");
    s12.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s9.classList.add("seatChoice");
    s10.classList.add("seatChoice");
    s11.classList.add("seatChoice");
  }
}

function t6() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s17.classList.add("seatChoice");
    s18.classList.add("seatChoice");
    s19.classList.add("seatChoice");
    s20.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s17.classList.add("seatChoice");
    s18.classList.add("seatChoice");
    s19.classList.add("seatChoice");
  }
}

function t7() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s21.classList.add("seatChoice");
    s22.classList.add("seatChoice");
    s23.classList.add("seatChoice");
    s24.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s21.classList.add("seatChoice");
    s22.classList.add("seatChoice");
    s23.classList.add("seatChoice");
  }
}

function t8() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s25.classList.add("seatChoice");
    s26.classList.add("seatChoice");
    s27.classList.add("seatChoice");
    s28.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s25.classList.add("seatChoice");
    s26.classList.add("seatChoice");
    s27.classList.add("seatChoice");
  }
}

function t9() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s29.classList.add("seatChoice");
    s30.classList.add("seatChoice");
    s31.classList.add("seatChoice");
    s32.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s29.classList.add("seatChoice");
    s30.classList.add("seatChoice");
    s31.classList.add("seatChoice");
  }
}

function t12() {
  if (resFour.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s37.classList.add("seatChoice");
    s38.classList.add("seatChoice");
    s39.classList.add("seatChoice");
    s40.classList.add("seatChoice");
  }

  if (resThree.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s37.classList.add("seatChoice");
    s38.classList.add("seatChoice");
    s39.classList.add("seatChoice");
  }
}

// If 1 or 2 guests are attending
function t4() {
  if (resTwo.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s13.classList.add("seatChoice");
    s14.classList.add("seatChoice");
  }

  if (resOne.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s13.classList.add("seatChoice");
  }
}

function t5() {
  if (resTwo.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s15.classList.add("seatChoice");
    s16.classList.add("seatChoice");
  }

  if (resOne.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s15.classList.add("seatChoice");
  }
}

function t10() {
  if (resTwo.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s33.classList.add("seatChoice");
    s34.classList.add("seatChoice");
  }

  if (resOne.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s33.classList.add("seatChoice");
  }
}

function t11() {
  if (resTwo.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s35.classList.add("seatChoice");
    s36.classList.add("seatChoice");
  }

  if (resOne.checked) {
    for (i = 0; i < numlist.length; i++) {
      numlist[i].classList.remove("seatChoice");
    }
    s35.classList.add("seatChoice");
  }
}
