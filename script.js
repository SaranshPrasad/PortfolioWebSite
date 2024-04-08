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


d1.addEventListener("click" , () =>{
    dd1.classList.toggle("block"); 
})

d2.addEventListener("click" , () =>{
    dd2.classList.toggle("block");
})

d3.addEventListener("click" , () =>{
    dd3.classList.toggle("block");
})

d4.addEventListener("click" , () =>{
    dd4.classList.toggle("block");
})

d5.addEventListener("click" , () =>{
    dd5.classList.toggle("block");
})



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