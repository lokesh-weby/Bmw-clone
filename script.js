
var menus=document.querySelectorAll(".menu")
var nav=document.querySelector('.navitems')
var uparrow=document.querySelector('.fix-1')
var content=document.querySelector('.innerContent')

menus.forEach((menu)=>{
    menu.addEventListener("click",()=>{
        nav.classList.toggle('hidden')
    })
})


window.addEventListener("scroll",()=>{

var maxScrollValue = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if(window.pageYOffset>maxScrollValue-400){
        
        uparrow.classList.add('show')
    }else{
        uparrow.classList.remove('show')
    }
})