const happy = document.getElementById("happy")
const angry = document.getElementById("angry")
const angryh2 = document.getElementById("angry-h2")
const happyh2 = document.getElementById("happy-h2")
const madh2 = document.getElementById("mad-h2")
const body = document.getElementsByTagName("body")
const mad = document.getElementById("mad")
let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 2000);
}

function alertFunc() {
    angry.style.display = "block";
    alert("Happy? Mourinho can only be happy for two seconds!");
    happy.style.display = "none";
    angry.style.display = "none";
    mad.style.display = "block"
}

happy.addEventListener("click", () => {
    angry.style.display = "none";
    myFunction()
    happyh2.innerHTML = "You are happy Mourinho!"
    madh2.innerHTML = "Mourinho is always angry!"
    
})

angry.addEventListener("click", () => {
    happy.style.display = "none";
    angryh2.innerHTML = "You are angry Mourinho!"
})