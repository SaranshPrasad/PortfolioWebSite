const skills = document.getElementById("right");
const about = document.getElementById("left");
const middle = document.getElementById("middle");
const first = document.getElementById("first");
const middleTxt = document.getElementById("txt-1");

const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const d3 = document.getElementById("three");
const d4 = document.getElementById("four");
const d5 = document.getElementById("five");

const dd1 = document.getElementById("dialogue-1");
const dd2 = document.getElementById("dialogue-2");
const dd3 = document.getElementById("dialogue-3");
const dd4 = document.getElementById("dialogue-4");
const dd5 = document.getElementById("dialogue-5");
const main = document.getElementById("main");
// Preloader 

const wapper = document.getElementById("wrapper");
if (wapper) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      wapper.style.display = "none";
    }, 2000);
    setTimeout(() => {
      main.style.display = "block";
    }, 2000);
  });
}

d1.addEventListener("click" , () =>{
    dd1.classList.toggle("block");

    if (dd1.classList.contains("block")) {
        d1.innerHTML = "1";
    } else {
        d1.innerHTML = "X";
    }
})


d2.addEventListener("click" , () =>{
    dd2.classList.toggle("block");
    if (dd2.classList.contains("block")) {
        d2.innerHTML = "2";
    } else {
        d2.innerHTML = "X";
    }
})

d3.addEventListener("click" , () =>{
    dd3.classList.toggle("block");
    if (dd3.classList.contains("block")) {
        d3.innerHTML = "3";
    } else {
        d3.innerHTML = "X";
    }
})

d4.addEventListener("click" , () =>{
    dd4.classList.toggle("block");
    if (dd4.classList.contains("block")) {
        d4.innerHTML = "4";
    } else {
        d4.innerHTML = "X";
    }
})

d5.addEventListener("click" , () =>{
    dd5.classList.toggle("block");
    if (dd5.classList.contains("block")) {
        d5.innerHTML = "5";
    } else {
        d5.innerHTML = "X";
    }
})

// d1.addEventListener("mouseenter", () =>{
//     dd1.classList.remove("block");
//     d1.innerHTML = "X";
// });

// d1.addEventListener("mouseleave", () =>{
//     dd1.classList.add("block");
//     d1.innerHTML = "1";
// });

skills.addEventListener("mouseenter", ()=>{
    document.body.style.backgroundColor = 'rgb(189, 135, 239)';
    skills.classList.add("border-class");

});
skills.addEventListener("mouseleave", ()=>{
    document.body.style.backgroundColor = 'white';
    skills.classList.remove("border-class");
});

about.addEventListener("mouseenter", ()=>{
    document.body.style.backgroundColor = 'rgb(255, 146, 164)';
    about.classList.add("border-class");
});
about.addEventListener("mouseleave", ()=>{
    document.body.style.backgroundColor = 'white';
    about.classList.remove("border-class");
});