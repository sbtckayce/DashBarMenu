let rightIcon =document.querySelector('.right-icon');
let sideBar =document.querySelector('.side-bar-main');
rightIcon.onclick =function(){
    rightIcon.classList.toggle('toggle');
    sideBar.classList.toggle('close');
}

let switchIcon =document.querySelector('.toggle-switch');
let body =document.querySelector('body');
switchIcon.onclick=function(){
    body.classList.toggle('dark')
    switchIcon.classList.toggle('toggle')
}

