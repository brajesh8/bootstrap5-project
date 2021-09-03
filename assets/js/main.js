let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDonw = () =>{
    let futureDate = new Date("30 Dec 2021")
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60)%24;
    let min = Math.floor(myDate/1000/60)%60;
    let sec = Math.floor(myDate/1000) %60;

    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDonw();

setInterval(countDonw,1000);

// scroll back to top

function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >=250){
            scrollTopButton.classList.add("scrollActive");
        }else{
            scrollTopButton.classList.remove("scrollActive")
        }
    }
}
scrollTopBack();


// navbar hide

let navBar = document.querySelectorAll('.nav-link');

let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})