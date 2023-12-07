// let menubtn = document.querySelector('#menubtn')
//  let navbar = document.querySelector('.navbar')

// menubtn.onclick = () =>{
//     menubtn.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
// window.onscroll = () =>{
//     menubtn.classList.remove('fa-times');
//     navbar.classList.remove('active');

const menubtn = document.querySelector("#menubtn")
const navbar = document.querySelector(".navbar")
const clsbtn = document.querySelector("#clsbtn")
menubtn.addEventListener("click" , function(){
    menubtn.style.display ="none"
    navbar.style.display = "block"
    clsbtn.style.display = "block"
    
})
clsbtn.addEventListener("click", function(){
    menubtn.style.display ="block"
    navbar.style.display = "none"
    clsbtn.style.display = "none"
})